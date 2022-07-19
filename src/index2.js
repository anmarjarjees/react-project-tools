import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*
NOTE:
Please refer to my initial index file that contains the full comment and code explanation
about how to start with React.
The file name "index1.js"

Based on our two components in App.js:
- "BasicContent" for any user
- "PrimeContent" for authorized users

We can attach a property and we can call it "authorized" to the "App" component
with initial value of "false"

Notice that we initialized the value of "authorized" property to "false" by default
*/

/*
Reviewing Array Destructuring
*/
const progLanguages = ["JavaScript", "Python", "PHP", "Dart"];
console.log(progLanguages);
/*
Besides using the array index to access any value like progLanguages[1] to access Python,
We can also use something called "Array Destructuring"

We need to get rid from the array varaible, so let's create a new one:
We created the varaible "ourModuleLanguage" inside array brackets []
So this will give us only the first item/element in the array which is "JavaScript"
*/
const [ourModuleLanguage] = ["JavaScript", "Python", "PHP", "Dart", "C#"];
console.log(ourModuleLanguage);

// and we can add more:
const [jsBook, pyBook, phpBook] = [
    "Beginning JavaScript",
    "Python For Everyone",
    "PHP and MySQL",
    "Dart Mobile Development",
    "C# Essential Programming"];

console.log(jsBook, pyBook, phpBook);

// We can skip items:
const [, , , , dotNetLanguage] = ["JavaScript", "Python", "PHP", "Dart", "C#"];
console.log(dotNetLanguage);

/*
This concept of destructuring an array 
is used in React in destructuring the "props" object when it has many properties
*/


ReactDOM.render(
    <App authorized={true} />,
    document.getElementById("root")
);