import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import PassingCount from './PassingCount/PassingCount'
import reportWebVitals from './reportWebVitals';
import Specialization from './Specialization/Specialization'
import FirstRouter from './reactrouter/FirstRouter';
import App from './Fetch/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirstRouter />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
