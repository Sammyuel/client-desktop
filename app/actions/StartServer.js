/* eslint-disable no-console */
import { ipcRenderer } from 'electron';
import { push } from 'connected-react-router';

export const SERVER_START_REQ = 'SERVER_START_REQ';
export const SERVER_START_OK = 'SERVER_START_OK';
export const SERVER_START_ERR = 'SERVER_START_ERR';
export const UPDATE_ARGS = 'UPDATE_ARGS';
export const SWITCH_TAB = 'SWITCH_TAB';
export const PRESET_SAVE_REQ = 'PRESET_SAVE_REQ';
export const PRESET_SAVE_OK = 'PRESET_SAVE_OK';
export const GET_PRESETS = 'GET_PRESETS';
export const PRESET_DELETE_REQ = 'PRESET_DELETE_REQ';
export const PRESET_DELETE_OK = 'PRESET_DELETE_OK';
export const SET_LOGFILE_PATH = 'SET_LOGFILE_PATH';

export const PRESETS = 'presets';

export function startServer(evt) {
  evt.preventDefault();
  return (dispatch, getState) => {
    // signal to the UI that we are beginning our request
    const {serverArgs} = getState().startServer;
    console.log(serverArgs);
    console.log("seee aboveR@#R@#R@#R@##@");
    ipcRenderer.send('start-server', serverArgs);
    console.log("hellolll");
    dispatch({type: SERVER_START_REQ});

  };
}

export function sessionsWindow(evt){
  return (dispatch, getState) => {
    const {capabilities} = getState().capabilities;
  }
}

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function startSession(){
  return (disaptch, getState) =>{
    dispatch();
  }
}