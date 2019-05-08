import {ipcRenderer} from 'electron';

export const FILE_NAMES = 'FILE_NAMES';
export const START_SCRIPT = 'START_SCRIPT';
export const SCRIPT_PATHS = 'SCRIPT_PATHS';
export function startScript(){
	return (dispatch, getState)=>{
		const path = getState().startScripts.scriptPath
		ipcRenderer.send('start-scripts', {path})
	}
}

export function setScriptPath(path){
	return (dispatch, getState) => {
		dispatch({type: SCRIPT_PATHS, path})
	}
}

export function findFiles(){
	return (dispatch, getState) => {
		ipcRenderer.on('test-files', (event, args) => {
			dispatch({type: FILE_NAMES, files: args})
		})
		ipcRenderer.send('find-files', getState().startScripts.scriptPath)

	}
}

