// Testing if h1 element is there
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

// running the test using test() function:
test("Renders an h1", () => {
    const { getByText } = render(<App />);
    // Passing / for searching for this text value as a regular expression
    const h1 = getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library");
})

// Test will pass:
// PASS  src/Application.test.js (5.233 s)