import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as StartScriptActions from '../actions/startScripts';
import startScripts from '../components/startScripts';

function mapStatetoProps(state){
	return state.startScripts;
}

function mapDisaptchtoProps(dispatch){
	return bindActionCreators(StartScriptActions, dispatch);
}

export default connect(mapStatetoProps, mapDisaptchtoProps)(startScripts)