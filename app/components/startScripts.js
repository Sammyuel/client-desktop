import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './StartSessions.css';
import routes from '../constants/routes';

export default class StartScripts extends Component<Props>{
	render() {
		return (
			<div>
				<Link to={routes.HOME}> back home </Link> 
				<button onClick={this.props.startScript}> start Script </button>
			</div>
		);
	}
}