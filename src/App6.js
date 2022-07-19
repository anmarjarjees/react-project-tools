import logo from './logo.svg';
import './App.css';
// We need to import the "useReducer"
import { useReducer } from "react";

/*
Please refer to my previous files:
- App1.js
- App2.js
- App3.js
- App4.js
- App5.js

for more learning, understanding, and demonstration purposes

Thanks,
Anmar
*/

// we only keep this essential component:
function App() {
  /*
  Handling the state of the checkbox through using "useReducer()" instead "useState()"
  and destructing the returned array value by adding:
  - our state varaible "checked"
  - our custom function for updating the state will be "toggleCheckbox"

  useReducer takes two arguments:
  - 1st: is the function block which is the reducer function that we want to use => (checked) => !checked
  - 2nd: is the initial state which is the same as we used in useState() Hook
  */
  const [checked, toggleCheckbox] = useReducer((checked) => !checked, false);

  /*
  This is the "toggleCheckbox" function that we created in the previous code to toggle the checkbox
  But now instead of creating it separately, we can embedded to userReducer formula!

  function toggleCheckbox() {
    setChecked((checked) => !checked)
  }
  */

  /*
  Now instead of "toggleCheckbox()", we will create a reducer function:
  - This function takes the current state and returns a new state
  - If checked is false => it returns true
  - if checked is true => it returns false

  Instead of hardcoded this behaviour into the onChange event as we did,

  */
  return (
    <>
      {/* 
      - Assign the value of the state variable "checked" to the "value" attribute 
      - Adding onChange event when the checkbox is changed
      - Calling our custom function "setChecked" that was destructured from the useState() array
      */}

      {/* 
      The previous code before adding toggleCheckbox() function: 
      The full function was written and executed as the value of onChange:
      () => setChecked(
        (checked) => !checked
      )    
      */}

      {/* <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)} /> */}

      {/* The new code after adding toggleCheckbox() function:  */}
      <input type="checkbox" value={checked} onChange={toggleCheckbox} />
      {/* Adding a paragraph to test the checkbox: */}
      <p>{checked ? "Is checked" : "Is unchecked"}</p>
    </>
  );
}

/*
The purpose of the useEffect Hook => to manage side effects that are not related to the component's render
The `useEffect` Hook is useful to perform additional work behind the scenes, 
without affecting the appearance of the webpage.

function app() {
     const [checked, toggle] = useReducer(
          (checked) => !checked,
          false
     );

To summarize:
Using the useReducer Hook with the code above should be returned: not checked
*/


export default App;
