
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
import { checkNewUpdates } from './auto-updater';
import { openBrowserWindow, setSavedEnv } from './helpers';

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
	let sessionWin = openBrowserWindow('session', {
		title: 'Start Session',
		titleBarStyle: 'hidden',
	});

}


function connectStartServer (win) {
  ipcMain.on('start-server', async (event, args) => {
    // log the server logs to a file
    try {
      const dir = await tempDir.openDir();
      logFile = path.resolve(dir, 'appium-server-logs.txt');
      win.webContents.send('path-to-logs', logFile);
      win.on('close', deleteLogfile);
    } catch (ign) { }

    // clean up args object for appium log purposes (so it doesn't show in
    // non-default args list
    if (args.defaultCapabilities &&
        Object.keys(args.defaultCapabilities).length === 0) {
      delete args.defaultCapabilities;
    }
    args.logHandler = (level, msg) => {
      batchedLogs.push({level, msg});
    };
    // make sure if the server barfs on startup, it throws an error rather
    // than the typical behavior, which is process.exit o_O
    args.throwInsteadOfExit = true;

    // set up our log watcher
    logWatcher = setInterval(async () => {
      if (batchedLogs.length) {
        try {
          await fs.writeFile(
            logFile,
            batchedLogs.map((log) => `[${log.level}] ${log.msg}`).join('\n'),
            {flag: 'a'}
          );
          win.webContents.send('appium-log-line', batchedLogs);
        } catch (ign) { }
        batchedLogs = [];
      }
    }, LOG_SEND_INTERVAL_MS);

    try {
      // set up the appium server running in this thread
      server = await appiumServer(args, true);
      await settings.set('SERVER_ARGS', args);

      win.webContents.send('appium-start-ok');
    } catch (e) {
      win.webContents.send('appium-start-error', e.message);
      try {
        await server.close();
      } catch (ign) {}
      clearInterval(logWatcher);
    }
  });
}