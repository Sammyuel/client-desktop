import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './StartSessions.css';
import routes from '../constants/routes';
import {Button, Input, Form, Row, Col, Select} from 'antd';

const {Item: FormItem} = Form;


export default class StartScripts extends Component<Props>{
	
	componentDidMount(){
		const {findFiles, files} = this.props
		findFiles()
	}


	render() {
		const {startScript, setScriptPath, findFiles, files} = this.props
		return (
			<div>
				<div>
					<Link to={routes.HOME}> back home </Link> 
					<button onClick={this.props.startScript}> start Script </button>
					<Form>
						<FormItem>
							<Input disabled = {false} defaultValue = {'path'} onChange={(e)=>setScriptPath(e.target.value)} /> 
						</FormItem>
					</Form> 
				</div>
				{files.map((file) => {
					return <div> {file} </div>
				})}
			</div>

		);
	}
}