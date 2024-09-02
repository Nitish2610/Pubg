import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Login from './components/Login'; // Example components
// import Signup from './components/Signup'; // Example components
import PrivacyPolicy from './components/PrivacyPolicy'; // Example components
import TermsAndConditions from './components/TermsAndConditions';
import Login from './components/Login';
import Signup from './components/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    {/* <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} /> */}
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsAndConditions/>}/>
    {/* Add more routes as needed */}
  </Routes>
</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
