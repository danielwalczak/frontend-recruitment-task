import isoFetch from 'isomorphic-fetch';

import { localUrl } from '../utils';

const jsonOpts = (method, data) => ({
  method,
  headers: {
    Accept: 'application/json'
  },
  body: JSON.stringify(data)
});

const fetchUrl = (url, opts) => {
  const fullUrl = url.indexOf('//') > -1 ? url : `${localUrl}/${url}`;
  return isoFetch(fullUrl, opts)
    .then((res) => res.json())
    .then((json) => json);
};

const getJSON = (url) => fetchUrl(url, jsonOpts('GET'));
const postJSON = (url, data) => fetchUrl(url, jsonOpts('POST', data));

export const fetch = {
  url: fetchUrl
};
export const json = {
  get: getJSON,
  post: postJSON
};
