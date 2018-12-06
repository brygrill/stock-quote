import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import QuotePage from './QuotePage';
import NotFoundPage from './NotFoundPage';

const Router = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route
          exact
          path="/:id"
          render={props => (
            <QuotePage symbol={props.match.params.id} {...props} />
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
