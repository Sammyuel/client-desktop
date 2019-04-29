import {bindActionCreators} from 'redux';
import {connect} from 'react-redu';
import * as StartSessionsActions from '../actions/StartSessions';
import startSessions from '../components/Main';


function mapStateToProps(state){
	return state.startSession;
}

function mapDispatchToProps(dispatch){
	return bindActionsCreators(StartSessionsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(startSessions);


