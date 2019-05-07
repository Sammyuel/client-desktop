// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import startServer from './StartServer';
import startSessions from './StartSessions';
import startScripts from './StartScripts';

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    startServer,
    startSessions,
    startScripts,
    counter,


  });
}
