import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './Home';

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  </Router>
);
