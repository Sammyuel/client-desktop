import {ipcRenderer} from 'electron';
import {push} from 'connected-react-router';


export const START_SESSION = 'START_SESSION';


export function startSessions(evt){
	return (dispatch, getState) => {
		ipcRenderer.send('get-default-caps');
		ipcRenderer.on('default-caps', (event, args) => {
			console.log(args)
			console.log(event)
			console.log("look above")
			console.log(Object.keys(event));
			console.log("seee")
			ipcRenderer.send('start-session', args)
			console.log("did it work?")

		})

		
		dispatch({type: START_SESSION})
	}
}