import logo from './logo.svg';
import './App.css';
// We need to import the "useState" and "useEffect" Hooks for this demonstration:
import { useState, useEffect } from "react";
// Getting data from GitHub API (Fetching data from a remote source)
/*
For more information, refer to my repo about working with API:
https://github.com/anmarjarjees/fssd-api-all-together
You can check the second part about GitHub API

Learn more: https://docs.github.com/en/rest

GitHub users: https://api.github.com/users
view their data as JSON

Or to grab your data as "JSON" for a specific user also:
URL: https://api.github.com/users/loginID
Example: 
URL: https://api.github.com/users/anmarjarjees
*/

/*
Please refer to my previous files:
- App1.js
- App2.js
- App3.js
- App4.js
- App5.js
- App6.js

for more learning, understanding, and demonstration purposes

Thanks,
Anmar
*/

// Recap/Review: JavaScript Fetch API
/*
The Fetch API interface allows web browser to make HTTP requests to web servers.
No need for XMLHttpRequest anymore.

Link: https://www.w3schools.com/js/js_api_fetch.asp
Link: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

The fetch() method is available in the global scope 
that instructs the web browsers to send a request to a URL.

 It provides an easy, logical way to fetch resources asynchronously across the network.

 A basic fetch request is really simple to set up. Have a look at the following code:
*/

/*
fetch('https://anmarjarjees.github.io/json-examples/music-inst.json')
  .then(response => response.json())
  .then(data => console.log(data));
*/

/*
fetch() function:
- takes one argument: the path to the resource you want to fetch 
- does not directly return the JSON response body 
but instead returns a promise that resolves with a "Response" object.

The Response object:
- Does not directly contain the actual JSON response body 
but is instead a representation of the entire HTTP response. 

Just for testing, you can:
- try this => .then(response => response)
- instead of this => .then(response => response.json())

If you console.log the "response" variable that contains the "Response" object:
Response {
  type: 'cors', 
  url: 'https://anmarjarjees.github.io/json-examples/music-inst.json', 
  redirected: false, 
  status: 200, 
  ok: true, …}

So, to extract the JSON body content from the Response object, 
we use the json() method, which returns a second promise 
that resolves with the result of parsing the response body text as JSON:
response.json()

Notice that "response" is just a varaible name and it's used by convention,
You can also try .then(x => x.json())
*/

// we only keep this essential component:
// This function has "login" parameter that  accepts "login" argument in the "index.js" file
function App({ login }) {
  // calling the "useState()" => return a varaible and a function to monitor the variable
  // data is the useState variable that refer to GitHub Data
  // setData is the function that monitor the changes of  (update) "data" variable
  // Sending/passing an initial state of null as we don't have any data when the app is first loading
  const [data, setData] = useState(null);

  // calling the "useEffect()": taking the arrow function as a callback function argument:
  useEffect(() => {
    // using fetch()
    /*
    instead of make it fixed: api.github.com/users/anmarjarjees
    we can make flexible: api.github.com/users/${login} <=> Literal Template
    login => is the variable that we pass to this function/component
    */
    // - fetch the API
    // - then calling the setData function as an argument
    // - then taking the response and convert it to json
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []); // end useEffect: Passing the empty array => we only want to fetch data when the component renders

  // Check if there is data
  if (data) {
    // test:
    console.log(data);
    /*
    {
      login: 'anmarjarjees', 
      id: 6352772, 
      node_id: 'MDQ6VXNlcjYzNTI3NzI=', 
      avatar_url: 'https://avatars.githubusercontent.com/u/6352772?v=4',
      gravatar_id: '', 
      avatar_url: "https://avatars.githubusercontent.com/u/6352772?v=4"
      bio: "Web Development and Software Engineering Instructor"
      blog: ""
      company: null
      created_at: "2014-01-08T19:52:53Z"
      email: null
      events_url: "https://api.github.com/users/anmarjarjees/events{/privacy}"
      followers: 2
      followers_url: "https://api.github.com/users/anmarjarjees/followers"
      following: 0
      following_url: "https://api.github.com/users/anmarjarjees/following{/other_user}"
      gists_url: "https://api.github.com/users/anmarjarjees/gists{/gist_id}"
      gravatar_id: ""
      hireable: null
      html_url: "https://github.com/anmarjarjees"
      id: 6352772
      location: null
      login: "anmarjarjees"
      name: "Anmar Jarjees"
      node_id: "MDQ6VXNlcjYzNTI3NzI="
      organizations_url: "https://api.github.com/users/anmarjarjees/orgs"
      public_gists: 0
      public_repos: 57
      received_events_url: "https://api.github.com/users/anmarjarjees/received_events"
      repos_url: "https://api.github.com/users/anmarjarjees/repos"
      site_admin: false
      starred_url: "https://api.github.com/users/anmarjarjees/starred{/owner}{/repo}"
      subscriptions_url: "https://api.github.com/users/anmarjarjees/subscriptions"
      twitter_username: null
      type: "User"
      updated_at: "2021-07-17T19:27:47Z"
      url: "https://api.github.com/users/anmarjarjees"
      [[Prototype]]: Object
      …}
    */

    // Returning a div that wraps all the content (data) that we will receive from the API
    // Below is the initial presentation just for testing:
    // return <div>{JSON.stringify(data)}</div>;

    // Below is the full rendered presentation:
    // data is the main returned object (varaible) that represent the entire contents
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
        <img alt={data.login} src={data.avatar_url} />
        <hr />
        <p>Below is the normal data with JSON.stringify():</p>
        {JSON.stringify(data)}
      </div>
    );
    /*
      NOTE: 
      In the next js file, we will handle the situation when the data cannot be fetched/displayed for any reason.

      Action: We should notify the user by using/adding another useState calls:
    */
  }
  // otherwise:
  return <div>User is not available!</div>;
}

export default App;
