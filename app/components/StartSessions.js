import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Main.css';
import routes from '../constants/routes';

export default class StartSessions extends Component<Props>{
	render() {
		const {startSession} = this.props;
		return (
			<div>
				hello
			</div>
		);
	}
}