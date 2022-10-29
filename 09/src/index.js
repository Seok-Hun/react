import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import PassingCount from './PassingCount/PassingCount'
import reportWebVitals from './reportWebVitals';
import Specialization from './Specialization/Specialization'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Specialization />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
