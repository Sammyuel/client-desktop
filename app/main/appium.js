
/* eslint-disable no-console */

import { ipcMain, app } from 'electron';
import { main as appiumServer } from 'appium';
import { getDefaultArgs } from 'appium/build/lib/parser';
import path from 'path';
import wd from 'wd';
import { fs, tempDir } from 'appium-support';
import _ from 'lodash';
import {createSession, killSession, getSessionHandler} from './appium-method-handler';
import request from 'request-promise';
import { openBrowserWindow} from './helper';
import appiumConnect from './appium_connect/appium-connect';

const LOG_SEND_INTERVAL_MS = 250;

const defaultEnvironmentVariables = _.clone(process.env);

let server = null;
let logWatcher = null;
let batchedLogs = [];

let logFile;



function initializer(win){
	connectStartServer(win);
}

export function createNewSessionWindow(win){
	let sessionWin = openBrowserWindow('startSessions', {
		title: 'Start Session',
		titleBarStyle: 'hidden',
	});

}

export function connectAppiumConnect(win){
   appiumConnect(win)
}

function connectStartSession(win){
  console.log('wtf')
  ipcMain.on('start-session', (event, args) => {
    console.log('it worked')
  })
}