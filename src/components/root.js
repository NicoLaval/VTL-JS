import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Menu from 'components/shared/menu';
import SimpleAPI from './simple-api';
import SimpleJS from './simple-js';
import Tree from './tree';
import Advanced from './advanced';

const Root = () => (
  <Router>
    <>
      <Menu />
      <div className="container centered">
        <Switch>
          <Route exact path="/simple-api" component={SimpleAPI} />
          <Route exact path="/simple-js" component={SimpleJS} />
          <Route exact path="/tree" component={Tree} />
          <Route exact path="/advanced" component={Advanced} />
          <Redirect from="/" to="/simple-api" />
        </Switch>
      </div>
    </>
  </Router>
);

export default Root;
