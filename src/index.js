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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserSignupPage /> */}
    {/* <UserLoginPage /> */}
    <HomePage />
  </React.StrictMode>
);

reportWebVitals();
