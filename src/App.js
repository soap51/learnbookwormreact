import React from 'react';
import {Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/page/HomePage';
import LoginPage from './components/page/LoginPage';
import DashboardPage from './components/page/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
const App = ({location}) => {
  return(<div className="ui container">
  <Route location={location} exact path="/" component={HomePage} />
  <GuestRoute location={location} exact path="/login" component={LoginPage} />
  <UserRoute location={location} exact path="/dashboard" component={DashboardPage} />
  </div>)}

App.propTypes = {
  location : PropTypes.shape({
    pathname : PropTypes.string.isRequired
  }).isRequired
}

export default App;
