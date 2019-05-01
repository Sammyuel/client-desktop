import {ipcRenderer} from 'electron';
import {push} from 'connected-react-router';


export const START_SESSION = 'START_SESSION';


export function startSessions(evt){
	return (dispatch, getState) => {
		ipcRenderer.on('default-caps', (event, args) => {
			console.log(args)
		})
		ipcRenderer.send('get-default-caps');
		dispatch({type: START_SESSION})
	}
}