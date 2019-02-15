import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Menu from 'components/shared/menu';
import D from 'i18n';
import Simple from './simple';
import Advanced from './advanced';

const Root = () => (
  <Router>
    <>
      <Menu />
      <div className="container centered">
        <Switch>
          <Route exact path="/simple" component={Simple} />
          <Route exact path="/advanced" component={Advanced} />
          <Redirect from="/" to="/simple" />
        </Switch>
      </div>
    </>
  </Router>
);

export default Root;
