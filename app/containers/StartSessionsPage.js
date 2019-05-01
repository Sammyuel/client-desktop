import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as StartSessionsActions from '../actions/StartSessions';
import startSessions from '../components/StartSessions';


function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(StartSessionsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(startSessions);


