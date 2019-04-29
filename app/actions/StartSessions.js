import {ipcRenderer} from 'electron';
import {push} from 'connected-react-router';



export const START_SESSION = 'START_SESSION';


export function startSessions(evt){
	return (dispatch, getState) => {
		dispatch({type: START_SESSION})
	}
}