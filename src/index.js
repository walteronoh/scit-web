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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='academics' element={<Academics />}></Route>
        <Route path='apply-now' element={<ApplyNow />}></Route>
        <Route path='home' element={<HomePage />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='payment-methods' element={<PaymentMethods />}></Route>
        <Route path='programmes' element={<Programmes />}></Route>
        <Route path='staff' element={<Staff />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
