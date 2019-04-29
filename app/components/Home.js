// @flow
import {Button, Icon} from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-id="container">
        <h2>Welcome</h2>
       <div>
	      <Link to={routes.STARTSERVER}>
	        test
	      </Link>
	   </div>
        <Link to={routes.COUNTER}>to Counter</Link>
	  	  <div className={styles.containerButton} data-id = "containerButton">
	        <Button id='startServerBtn'
	 			className = {styles.startButton}
	 			type="primary"
	 			 >

	        	Button
	        </Button>

	     </div>
      </div>


    );
  }
}



