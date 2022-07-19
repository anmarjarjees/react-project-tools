import logo from './logo.svg';
import './App.css';
/*
Adding Image to our website,
First: import it from the "src" folder
Notice that "reactLogo" will just a variable to be used to refer to the image

A valid reference contains the pathname, the filename, and the name to use as an object reference:
*/
import reactLogo from './react_logo.png';

/*
- We can add component by creating a function
- A function returns JSX
*/

// Commenting these default code:
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// Overriding the main default function "APP" to return our custom components
/*
function App() {
  return (
    <div className="App">
      <h1>Learning React</h1>
      <h2>JavaScript Front-End Framework</h2>
      <h3>The Fundamentals</h3>
    </div>
  );
}
*/


// So let's create our custom components (component = function)
// Using Capital "PascalCase" by convention:
// Component (React Function) returns UI 

// The very basic Header component:
/*
function Header() {
  return (
    <header>
      <h1>React The Lovely Framework</h1>
    </header>
  );
}
*/

/*
- Every component can access an object for Properties
- This object is passed to the component as a function parameter
- can be called/named "props" by convention
- Passing "props" to the component/function "Header"
- The "props" object contains all the properties for its component "Header"
*/
function Header(props) {
  // testing the object "props"
  // console.log(props); // just an empty object if no property are added
  /*
    The properties of "props" object
    need to be added in the main default function "App()"
    where the component (function) is being rendered
    or where the component is being placed/called inside the App() function

    These properties can be set to any meaningful name,
    in this example our props' property is called "quote"

    We can use JSX expression for wrapping "props" and its properties: {}

  */
  return (
    <header>
      <h1>React The Lovely Framework</h1>
      <blockquote cite="https://www.lifehack.org/articles/communication/30-best-quotes-inspire-you-never-stop-learning.html">
        {props.quote}
      </blockquote>
    </header>
  );
}

// Adding the main component
function Main(props) {
  return (
    <main>
      <h1>What's React</h1>
      <p>
        React is a {props.adjective} JavaScript library for building user interfaces.
        Learn what React is all about on our homepage or in the tutorial.
      </p>
      {/* 
      After importing the image file, we can place it anywhere:

      (alias) const reactLogo: string
      import reactLogo

      Original Image Size: 512 x 445
      
      NOTE:
      - To add only the value in pixels, you can just write the number, for example: 350
      - To specify it's in percentage (RWD), you need to inclose it with quotes: '100%'
      - Don't forget "alt" attribute for AODA
      */}
      <img src={reactLogo} style={{ maxWidth: '100%' }} alt={"React Official Logo"} />

      {/* 
      We can add inline CSS using JSX expression also: 
      Notice that we use the JS syntax => textAlign
      Not the CSS syntax => text-align

      
      for more refreshing, refer to my code lectures about JavaScript Fundamentals
      */}

      {/* 
      REACT WARNING:
      ==============
      Working on fixing the React Keys Error: 
      Warning: Each child in a list should have a unique "key" prop.


      Keys help React identify which items have changed, are added, or are removed. 
      Keys should be given to the elements inside the array to give the elements a stable identity:
      link: https://reactjs.org/docs/lists-and-keys.html#keys

      Example of a code that generates the warning:
      <ul style=({ textAlign: "left" })>
          {props.dishes.map((dish) => (
          <li>{dish}</li>))}
      </ul>

      Based on React Docs, here is an example of the solution:
      
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
      );

      In our code:
      - adding index for index in map((site),index)
      - adding key={index} in <li>(site)...

      The full old code solution:
      {
          props.learnSites.map(
            (site, index) => (<li key={index}>{site}</li>)
          )
      }

      But this way of coding is not recommended although it's going to fix the problem (clear the warning):
      We don't recommend using indexes for keys if the order of items may change. 
      This can negatively impact performance and may cause issues with component state.

      Solution: 
      Adjusting our learnSites to return an object of two keys:
      "id" and "site"
      */}

      <ul style={{ textAlign: "left" }}>
        {/* 
        Pulling the value of the property "learnSites" from the "props" object: 
        Also we don't use any printing function/method just the HTML element with JS varaible:
        <li>{site}</li>
        */}
        {
          props.learnSites.map(
            // (site, index) => (<li key={index}>{site}</li>) // Previous Solution
            (site) => (<li key={site.id}>{site.title}</li>) // The Best Solution
          )
        }
      </ul>

      <p style={{ textAlign: "centre" }}>
        This a just a quick demo about using React. Thanks!
        <img src="https://github.com/anmarjarjees.png" width={300} style={{ display: "block", margin: "15px auto" }} alt={"Anmar's Workstation"} />
      </p>
    </main>
  );
}

// Finally adding the footer component for our webpage:
function Footer(props) {
  return (
    <footer>
      &copy; {props.year} React Main Project Rebuilding, Modifying, and Updating by Anmar
    </footer>
  );
}

/*
We can pass more data to the component
*/
const learnSites = [
  "Treehouse",
  "Codecademy",
  "Egghead"
];

/*
REACT WARNING SOLUTION:
=======================
The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. 
Most often you would use IDs from your data as keys:

Refactoring our array to return an object that contains a key and a site name:
Going to write a transformation function:

- mapping over the array elements (learnSites)
- out of each element (site), we will return an object
- when we return an object from a map function, we use the symbol of object literal {}

So below is a bette solution as we build our object by adding the wanted values 
with their corresponding keys, then we can pass it to our component as a property

To use keys, you need to create key names and generate unique identifiers. 
In this case, the key names are `id` and `title`:
*/
const learnSitesObject = learnSites.map((site, index) => ({ id: index, title: site }));
// Testing:
console.log(typeof learnSitesObject); // object
console.log(learnSitesObject);
/*
(3) [{…}, {…}, {…}]
0: {id: 0, title: 'Treehouse'}
1: {id: 1, title: 'Codecademy'}
2: {id: 2, title: 'Egghead'}
*/

/*
To recap and for testing/outputting our array, 
we can use the array method .map() with the arrow function:
Link: https://www.w3schools.com/jsref/jsref_map.asp
*/
learnSites.map((site) => console.log(site));

// Overriding the main default function "APP" to return our custom components
// This App() is used to compose all our component into a single page
function App() {
  return (
    // Notice that with React, we use "className" instead of "class" (Otherwise there will be an error)
    <div className="App">
      {/* Function Header(): JSX.Element */}
      {/* Below is the basic call: */}
      {/* <Header /> */}
      {/* Below we are declaring/adding properties */}
      <Header quote='"Life is like riding a bicycle. To keep your balance you must keep moving." -Albert Einstein"' />
      {/* Adding the component "Main" */}
      {/* Below is the basic call: */}
      {/* <Main /> */}
      {/* Below we are declaring/adding properties */}
      {/*
      Below instead of adding just a literal string value,
      we can add JS code using JSX {}

      The old code: Passing our original array of strings only
      learnSites={learnSites}
      on the left is just a placeholder (any name): learnSites => (property) learnSites: string[]
      on the right is the actual array: {learnSites} => const learnSites: string[]

      The new code: Passing our array of object that contains keys for each value
      learnSites={learnSitesObject}
      */}
      <Main adjective="very famous" learnSites={learnSitesObject} />
      {/* Adding the final component */}
      {/* Below is the basic call: */}
      {/* <Footer /> */}

      {/*
      Again, below also, instead of adding just a literal string value,
      we can add JS code using JSX {}

      (method) Date.getFullYear(): number
      Gets the year, using local time.
      */}
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

/*
As we did in the index file (refer to the initial code inside index1.js)
by adding React.Fragment, we can do the same here:

So instead of this code:
function App() {
  return (
    <div className="App">
       ... render the components ...
    </div>
  );
 }

We can use:
function App() {
  return (
    <React.Fragment>
       ... render the components ...
    </React.Fragment>
  );
 }

 Or the shorthand:
 function App() {
  return (
    <>
       ... render the components ...
    </>
  );
 }

 So the `React.Fragment` construct allows sibling components to be rendered together 
 without creating any additional html tags.
 But both ways will remove the initial styling class "App"
*/

// Below is the default code for exporting a default function (component) named "App"
// Which means we need to import it in another file, which is "index.js" in our case
// And it's already there by default => import App from './App';
export default App;
