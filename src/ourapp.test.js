// Here is our file for running the test
// The file could be anyNameYouLike.test.js
// importing timesTwo function form functions.js file:
import { timesTwo } from "./functions";
/*
using a function named "test" with two arguments:
1. First Argument: the syntax (parameter) is coming from the JEST library
that is automatically included. It's just the name of the test
2. Second Argument: Is what should be tested
*/

test("Multiplies by two", () => {
    // in the expect(), we need to call timesTwo function as CallBack function
    // passing the value of "4" and expecting the value to be "8" (4*2)
    // the code for this function should be written inside the functions.js file
    expect(timesTwo(4)).toBe(8);
    /*
    The above code describes an "assertion test" which returns a pass or fail; 
    it will return a pass when a function's output returns an expected value.
    */
});