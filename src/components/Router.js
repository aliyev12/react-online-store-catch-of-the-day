import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../components/App';
import StorePicker from '../components/StorePicker';
import NotFound from '../components/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
