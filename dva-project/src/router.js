import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/Login'
import Index from './routes/Index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login"  component={Login} />
        <Route path="/index"  component={Index} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
