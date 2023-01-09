import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router';
import loadable from '@loadable/component'


const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/Signup'));
const Workspace = loadable(() => import('@layouts/Workspace'));


const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/LogIn" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/:workspace" component={Workspace} />
    </Switch>

  )
};

export default App;
