import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Words from './components/Words';

export default function routes() {
  return <Switch>
    <Route path="/" exact render={() => {
      return (
        <div>
          <h1>Welcome to Word Bank</h1>
        </div>
      )
    }} />
    <Route path="/login" component={Login} />
    <Route path="/profile" component={Profile} />
    <Route path="/words" component={Words} />
  </Switch>
}