import logo from './logo.svg';
import './App.css';
/*
NOTE:
/*
Please refer to my previous files:
- App1.js

for more learning, understanding, and demonstration purposes

Thanks,
Anmar
*/

// Add our custom components (functions):
/*
This component should be visible only for authorized/registered members not for the public
The logged in users
*/
function PrimeContent() {
  return <h1>Private and Personalized Content for Authorized or Registered Members Only</h1>
}

/*
This component should be visible for the public
For any user
*/
function BasicContent() {
  return <h1>Public and Free Content for any Visitor or Member</h1>
}

/*
Now we can render our custom components conditionals based on properties
if (logged in user) => Access PrimeContent
*/

/*
Notice the old code:
function App(props) {
  console.log(props); // {authorized: true}
  return (
    <>
      {props.authorized ? <PrimeContent /> : <BasicContent />}
    </>
  );
}
*/

// Modifying the code with Object Destructuring:
// so instead of passing the object "props"
// Then accessing its property "authorized"
// We can just destruct the "authorized" property directly: { authorized } instead of "props"
function App({ authorized }) {
  // We can stop rendering the normal template, just to add the conditional rendering
  /*
  return (
    <div className="App">
    </div>
  );
  */

  /*
  // Initial Code:
  if (props.authorized) {
    return <PrimeContent />;
  }
  else {
    return <BasicContent />;
  }
  */

  // Using Ternary Operator:
  return (
    <>
      {authorized ? <PrimeContent /> : <BasicContent />}
    </>
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
