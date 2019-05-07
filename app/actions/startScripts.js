import {ipcRenderer} from 'electron';


const START_SCRIPT = 'START_SCRIPT'
export function startScript(){
	return (dispatch, getState)=>{
		ipcRenderer.send('start-scripts')
		console.log("hello rendererer")
	}
}