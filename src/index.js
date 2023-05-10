import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Form.css';
import reportWebVitals from './reportWebVitals';
import UserSignupPage from './pages/UserSignupPage';
import UserLoginPage from './pages/UserLoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import TopBar from './components/TopBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <TopBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={UserLoginPage} />
      <Route path="/signup" component={UserSignupPage} />
      <Route path="/user/:username" component={UserPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

reportWebVitals();
