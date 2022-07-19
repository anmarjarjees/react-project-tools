import logo from './logo.svg';
import './App.css';

/*
Please refer to my previous files:
- App1.js
- App2.js
- App3.js

for more learning, understanding, and demonstration purposes

Thanks,
Anmar
*/

// since we need to use "useState", so we need to pull it from the React library:
// useState is a function in the library => we use {} to find it
// Adding also "useEffect" function from the library
import { useState, useEffect } from "react";

// useEffect:
// and since we need to use "useEffect", so we need to pull it from the React library:
// useState is a function in the library => we use {} to find it
/*
Accepts a function that contains imperative, possibly effectful code.
it's used to manage side effects that are not related to the components render
like:
- console messages
- loading data
- animation

https://reactjs.org/docs/hooks-reference.html#useeffect
*/

// we only keep this essential component:
function App() {
  const [ourTopic, setOurTopic] = useState("useState Function");
  /*
    To recap:
    const [ourTopic, setOurTopic] = useState("useState Function")
    - ourTopic = is the state variable
    - setOurTopic = is the function to update the state
    - useState("useState Function") = passing whatever the state will be into useState() built-in function
    The passing value could be any data type 
  */
  console.log(`Our Topic: ${ourTopic}`); // "Our Topic: useState Function"

  // Adding other example:
  const [nextTopic, setNextTopic] = useState("React Router");
  console.log(`Next Topic: ${nextTopic}`); // "Next Topic: React Router"

  // Using useEffect() Hook function to console the current topic:
  // useEffect() takes a callback function: using arrow function ()=>{}
  // As anonymous function, it will run every time the page is refreshed, or when below buttons are clicked
  // useEffect() takes a second argument
  // This argument is called "The Dependency Array" => [ourTopic]
  /*
  useEffect() watching the value of useState, if it changes it will call the function
  
  NOTE: 
  - It's important to add the dependency array argument that contains the useState varaible "ourTopic"
  - So it will console.log only if the value of the console.log "the state varaible" has been changed
  As we don't want to keep printing the same messages every time th button is clicked!
  The following useEffect() will watch the "ourTopic" change
  */
  useEffect(() => {
    // Outputting the state variable "outTopic" that we received from useState()
    console.log(`Current Learning Stage: ${ourTopic}`);
  }, [ourTopic]);
  // Initial Run/load (Refreshed Console Output) => Current Learning Stage: useState Function

  // Adding another useEffect() hook:
  /*
   The following useEffect() will watch the "nextTopic" change
  */
  useEffect(() => {
    console.log(`Next Learning Stage: ${nextTopic}`);
  }, [nextTopic]);
  // Initial Run/load (Refreshed Console Output) => Next Learning Stage: React Router

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
      <hr />
      {/* Adding more buttons */}

      <h1>Next Task: {nextTopic}</h1>
      <button onClick={() => setNextTopic("Understanding Router")}>
        Next
      </button>

      <button onClick={() => setNextTopic("Router Coding and Practicing")}>
        How
      </button>

      <button onClick={() => setNextTopic("Building more projects!")}>
        Then
      </button>
    </>
  );
}


export default App;
