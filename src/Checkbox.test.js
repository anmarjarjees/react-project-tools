// We need to import render() function and fireEvent
import { fireEvent, render } from "@testing-library/react";
// We need to import Checkbox.js file:
import { Checkbox } from "./Checkbox";

// Giving our test a name "Selecting Checkbox" as "First Element"
// And the callback function ()=>{ } as "Second Element"
test("Selecting Checkbox", () => {
    // Our Test: Selecting the checkbox element
    // dispatches the click event to ensure the value changes
    // By using React Query as part of the React Testing library:
    // Grabbing the value of the checkbox by using another React selector called "getByLabelText"
    // Assign to it the render function nad passing the name of the component and we call it "<Checkbox />"
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/Not checked/); // Notice the letter case "Not checked"

    // Now we need to monitor the status of the check box or trigger an action when the checkbox is changed,
    // We can use fireEvent.click() which is used to fire an event on click as its name indicates
    // passing the const "checkbox":
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});