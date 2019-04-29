import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import StartServerPage from './containers/StartServerPage';
import StartSessionsPage from './containers/StartSessionsPage'

export default () => (
  <App>
    <Switch>
      <Route path={routes.MAIN} component={StartSessionsPage} />
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.STARTSERVER} component={StartServerPage}/>
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
