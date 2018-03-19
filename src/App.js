import React from 'react';
import {Route } from 'react-router-dom';
import HomePage from './components/page/HomePage';
import LoginPage from './components/page/LoginPage';

const App = () => {
  return(<div className="ui container">
  <Route exact path="/" component={HomePage} />
  <Route exact path="/login" component={LoginPage} />
  </div>)}



export default App;
