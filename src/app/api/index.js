import { json } from '../utils';
import { MAX_WORD_LENGTH } from '../containers/Game/constants';

export default {
  fetchWord() {
    const url = 'http://api.wordnik.com:80/v4/words.json/randomWord'
      + '?hasDictionaryDef=false'
      + '&includePartOfSpeech=noun'
      + '&excludePartOfSpeech=given-name, noun-plural'
      + '&minCorpusCount=0'
      + '&maxCorpusCount=-1'
      + '&minDictionaryCount=1'
      + '&maxDictionaryCount=-1'
      + '&minLength=5'
      + `&maxLength=${MAX_WORD_LENGTH}`
      + '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    return json.get(url);
  },
};
