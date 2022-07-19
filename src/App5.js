import logo from './logo.svg';
import './App.css';
// only need useState
import { useState } from "react";

/*
Please refer to my previous files:
- App1.js
- App2.js
- App3.js
- App4.js

for more learning, understanding, and demonstration purposes

Thanks,
Anmar
*/

// we only keep this essential component:
function App() {
  /*
  Handling the state of the checkbox through using "useState()"
  and destructing the returned array value by adding:
  - our state varaible "checked"
  - our custom function for updating the state "setChecked"
  */
  const [checked, setChecked] = useState(false);

  /*
  Creating another function to toggle the checkbox
  */
  function toggleCheckbox() {
    setChecked((checked) => !checked)
  }
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


export default App;
