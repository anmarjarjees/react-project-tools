import logo from './logo.svg';
import './App.css';
// Basic Hooks:
// since we need to use "useState", so we need to pull it from the React library:
// useState is a function in the library => we use {} to find it
/*
Link: https://reactjs.org/docs/hooks-reference.html#usestate
*/
import { useState } from "react";

/*
Please refer to my previous files:
- App1.js
- App2.js

for more learning, understanding, and demonstration purposes
*/

// we only keep this essential component:
function App() {

  // 1: Initial Try:
  // ===============
  // Using/calling useState() React built-in function and assigning its returned value to a varaible:
  const utResultTest1 = useState();
  console.log(utResultTest1);
  /*
  useState() returns => Array of two items:
  (2) [undefined, ƒ]
  0: undefined <=> undefined item that we are going to define later => It's our state varaible (stateful value)
  1: ƒ () <=> a function => it's used to update the state
  */

  // 2: Second Try:
  const utResultTest2 = useState("Using useState");
  console.log(utResultTest2);
  /*
  useState() returns => Array of two items:
  (2) ['Using useState', ƒ]
  */

  // 3: Third Try with Array Destructuring to get the value of the first item in the array:
  /*
  const [ourTopic] = useState("useState Function");
  console.log(ourTopic); // "Using Function"
  */

  // 4: Forth Try with Array Destructuring to get the first item and the second one in the array:
  /*
  Notice that by convention we use the word "set" followed by any meaning varaible name
  */
  const [ourTopic, setOurTopic] = useState("useState Function");
  /*
  To recap:
  const [ourTopic, setOurTopic] = useState("useState Function")
  - ourTopic = is the state variable
  - setOurTopic = is the function to update the state
  - useState("useState Function") = passing whatever the state will be into useState() built-in function
  The passing value could be any data type 
  - The useState Hook is used to define states inside a React.js application.
  - The first item that the useState Hook returns is an array
  */
  console.log(ourTopic); // "useState Function"


  // Arrow function: ()=>{ }
  // review: https://www.w3schools.com/js/js_arrow_function.asp
  const subject = "ReactJS";

  // Normal:
  const what1 = function (sub) {
    return "Our Subject1: " + sub;
  }

  // Or:
  const what2 = (sub) => {
    return "Our Subject2: " + sub;
  }

  // Or:
  const what3 = (sub) => "Our Subject3: " + sub;

  // Or:
  const what4 = sub => "Our Subject4: " + sub;

  // Another Example:
  const simple = () => {
    console.log("Very Simple Form of Arrow Function!");
  }

  console.log(what1(subject)); // Our Subject1: ReactJS
  console.log(what2(subject)); // Our Subject2: ReactJS
  console.log(what3(subject)); // Our Subject3: ReactJS
  console.log(what4(subject)); // Our Subject4: ReactJS

  // calling simple function:
  simple(); // Very Simple Form of Arrow Function!

  return (
    <>
      {/* <h1>Working with useState</h1> */}
      <h1>Main Task: {ourTopic}</h1>

      {/* Adding a button for demonstrating the use of "useState" function: */}
      <button onClick={() => setOurTopic("Learning and Coding useState!")}>
        Our Topic
      </button>

      {/* we can add more for demo */}
      <button onClick={() => setOurTopic("You will keep learning!")}>
        None stop
      </button>

      <button onClick={() => setOurTopic("You can start again from beginning for more understanding")}>
        Repeat
      </button>
    </>
  );
}


export default App;
