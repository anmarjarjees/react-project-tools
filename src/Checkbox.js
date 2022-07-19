// Creating our Checkbox
import React, { useReducer } from "react";

// The Checkbox() function will be called in Checkbox.test.js file
export function Checkbox() {
    // useReducer() with "checked" and "toggle"
    const [checked, toggle] = useReducer(
        // useReducer will take the old state and returns the new state
        // passing the initial value which is "false" => !checked
        (checked) => !checked,
        false
    );
    return (
        // returning a fragment: <> and </>
        // Notice the letter case "Not checked" matching our code in Checkbox.test.js
        <>
            <label htmlFor="checkbox">
                {checked ? "Checked" : "Not checked"}
            </label>

            <input type="checkbox" id="checkbox" value={checked} onChange={toggle} />
        </>
    );
}