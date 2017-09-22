import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MultiView from 'views/MultiView';
import SingleView from 'views/SingleView';
import NotFound from 'views/NotFound';

const publicPath = '/build';

export const routeCodes = {
  MultiView: publicPath,
  SingleView: `${ publicPath }color/:id`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ MultiView } />
    <Route path={ routeCodes.SingleView } component={ SingleView } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
