import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ApplyNow from './pages/ApplyNow';
import HomePage from './pages/HomePage';
import Academics from './pages/Academics';
import PaymentMethods from './pages/PaymentMethods';
import Programmes from './pages/Programmes';
import Staff from './pages/Staff';
import App from './App';
import ResponsiveDrawer from './pages/common/NavBar';
import Profile from './pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='apply-now' element={<ApplyNow />}></Route>
        {/* Admin */}
        <Route path='academics' element={<ResponsiveDrawer component={Academics} />}></Route>
        <Route path='home' element={<ResponsiveDrawer component={HomePage} />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='payment-methods' element={<ResponsiveDrawer component={PaymentMethods} />}></Route>
        <Route path='programmes' element={<ResponsiveDrawer component={Programmes} />}></Route>
        <Route path='staff' element={<ResponsiveDrawer component={Staff} />}></Route>
        {/* <Route path='profile' element={<ResponsiveDrawer component={Profile} />}></Route> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
