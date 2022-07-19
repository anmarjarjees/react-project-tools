import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importing the React Router DOM as we are using a browser to render our page
// There are also React Router for Native Apps
import { BrowserRouter as Router } from "react-router-dom"

/*
Working with React Routers
*/


ReactDOM.render(
    // Adding the Router element and placing all our App component inside the Router:
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);