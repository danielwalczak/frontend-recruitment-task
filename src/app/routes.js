import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import debug from 'debug';

import Game from './containers/Game';
import GameStore from './containers/Game/store';

const gameStore = new GameStore();

debug('lego:routes');

const siteTitle = 'React Lego';

export const routes = {
  homepage: {
    path: '/',
    label: 'About React Lego',
    title: `${siteTitle} - About React Lego`,
    component: () => <Game store={gameStore} />
  }
};

const indexRoute = (route) => Object.assign({}, route, { path: null });

export const LinkHelper = ({ to, ...props }) => {
  if (!routes[to]) throw new Error(`Route to '${to}' not found`);
  return (
    <Link to={ routes[to].path } { ...props }>
      { props.children || routes[to].label }
    </Link>
  );
};

export function makeRoutes() {
  return (
    <Route path="/">
      <IndexRoute { ...indexRoute(routes.homepage) } />
    </Route>
  );
}
