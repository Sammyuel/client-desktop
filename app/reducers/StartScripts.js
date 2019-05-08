import {SCRIPT_PATHS, START_SCRIPT, FILE_NAMES} from '../actions/startScripts';

var initialState = {scriptPath: '/Users/sam/Documents/node_spawn', files: ['test']}
export default function startScripts(state = initialState, action){
	switch(action.type){
		case SCRIPT_PATHS:
			return {...state, scriptPath: action.path}
		case FILE_NAMES:
			return ({...state, files: action.files})
		default:
			return state;
	}
}