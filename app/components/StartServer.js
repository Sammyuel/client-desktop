// @flow
import {Button, Icon} from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './StartServer.css';
import { ipcRenderer } from 'electron';


type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  startServer: number
};

export default class StartServer extends Component<Props> {
  props: Props;
  example(){
    console.log("hello motherfucker");
    return
  }


  render() {
    const {
      startServer
    } = this.props;

    return (
      <div>
        <h2>HELLLLLLOOO</h2>
        <Link to={routes.HOME}> home </Link>
        <button onClick={this.props.startServer}> Touch me </button>
        <button onClick={this.example}> hello </button>
        <button onClick={this.props.startServer}> hi </button>

      </div>
    );
  }
}




