import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ManageTwittPage from './components/twitt/ManageTwittPage'; //eslint-disable-line import/no-named-as-default
import TwittsPage from './components/twitt/TwittsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="twitts" component={TwittsPage} />
    <Route path="twitt" component={ManageTwittPage} />
    <Route path="twitt/:id" component={ManageTwittPage} />
  </Route>
);
