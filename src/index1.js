import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
After building and testing the essential of our App using:
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

We will render an additional component:
I will call it AppAnmar
*/
function AppAnmar() {
  return (<h1>This is our custom App</h1>);
  // <p>This App which is called "AppAnmar()" is just another component (function) 
  // written in the same index.js file</p>;
}

/*
AJ: ReactDOM.render() methods parameters:
- 1st: the element that we want to create => React.createElement()
- 2nd: is where we want to put/create it => document.getElementById('root')
These content will be injected into the index.html in the "public folder"
Theres is a div with id valued of "root" where the content will be added/embedded
*/
ReactDOM.render(
  // AJ: Commenting these lines:
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')

  // Start from scratch:
  // .createElement( element, properties, content)
  // we can use the keyword "null" for no properties
  // or using { adding HTML properties here }
  // React.createElement("h1", null, "Learning React"),
  // React.createElement("h1", { id: "important", class: "main", style: { color: "blue" } }, "Learning React"),
  // Creating ul element (very complex nested elements)
  /*
  React.createElement(
    "ul",
    { id: "important", class: "main", style: { color: "blue" } },
    React.createElement("li", null, 'HTML and CSS'),
    React.createElement("li", null, 'Bootstrap'),
    React.createElement("li", null, 'JavaScript'),
    React.createElement("li", null, 'ReactJS')
  ),
  */

  /*
  Instead, we use JSX => JavaScript as XML
  which is a language extension for writing html elements/tags directly in JavaScript

  We can just write the html code:
  Babel is the tool that works behind the scenes for creating all the listed element for us!
  In other words, Babel will compile the following JSX code
  */
  /*
  <ul>
    <li>HTML and CSS</li>
    <li>Bootstrap</li>
    <li>JavaScript</li>
    <li>ReactJS</li>
  </ul>,
  */

  /*
    Or we can use the imported component => import App from './App';

    Then besides the original default "App", we can render our custom one "AppAnmar"

    NOTE: 
    When loading multiple applications/Components/Function,
    We need to wrap them within a block-level element like "div".
    In JSX, you cannot render two sibling components unless they are both wrapped inside another tag.

    The code:
    <div>
      <App />
      <AppAnmar />
    </div>,

    This will include using too much div elements!

    Another better way, is using React Fragments:
    <React.Fragment>
      <App />
      <AppAnmar />
    </React.Fragment>,

    React.Fragment will act as a wrapper in our code,
    but it will not add or change the DOM

    Finally, instead of using the full syntax React.Fragment,
    we can just ust empty <>:
    <>
      <App />
      <AppAnmar />
    </>,

  */
  <React.Fragment>
    <App />
    <AppAnmar />
  </React.Fragment>,
  document.getElementById('root')
);

// AJ: Clear all the content to start clean...
/*
React.StrictMode => command
React.StrictMode => should be included in the index.js file to ensure that React code adheres to best practices
React.StrictMode => will generate warnings if any code is outside of a coding best practice

*/

