import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import BinMain from './components/bins/BinMain';
import BinList from './components/bins/BinList';
import { Bins } from '../imports/collections/bins';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinList} />
      <Route path="bins/:binId" component={BinMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(
    routes,
    document.querySelector('.render-target')
  );
})
