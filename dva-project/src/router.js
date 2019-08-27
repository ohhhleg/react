import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './routes/Login'
import Index from './routes/Index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login"  component={Login} />  
        <Route path="/index"  component={Index} />
        <Redirect
       to={{
         pathname: "/login",
       }}
     />
      </Switch>
    </Router>
    
  );
}

export default RouterConfig;
