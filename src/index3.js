import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
Working with useState Hook
*/

/*
ReactDOM.render(
    <App authorized={true} />,
    document.getElementById("root")
);
*/

/*
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
*/

/*
login="anmarjarjees"
"login" is the varaible name we used in the App.js file as the argument for the component/function App()
"anmarjarjees" is just the value we pass to search for this user on GitHub (You can put any other username)
*/
ReactDOM.render(
    <App login="anmarjarjees" />,
    document.getElementById("root")
);