import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


import indexRoutes from './routes';

const hist = createBrowserHistory();

render(
  <Router history={hist}>
  <Switch>
    {indexRoutes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
</Router>
    , document.getElementById('react-container'));
//thats why we need react-preset in babel to convert this (JSX to regular javascript) then that browser can interprit