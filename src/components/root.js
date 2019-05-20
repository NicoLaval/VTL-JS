import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Menu from 'components/shared/menu';
import Simple from './simple';
import Tree from './tree';
import Advanced from './advanced';

const Root = () => (
  <Router>
    <>
      <Menu />
      <div className="container centered">
        <Switch>
          <Route exact path="/simple" component={Simple} />
          <Route exact path="/tree" component={Tree} />
          <Route exact path="/advanced" component={Advanced} />
          <Redirect from="/" to="/simple" />
        </Switch>
      </div>
    </>
  </Router>
);

export default Root;
