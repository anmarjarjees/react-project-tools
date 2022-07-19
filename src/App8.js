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
- App7.js

for more learning, understanding, and demonstration purposes

Thanks,
Anmar
*/

// Recap: JavaScript Fetch API
/*
When making an HTTP request to an API, there are three possible states:
- Pending/Loading
- Success <=> when all the data are fetched 
- Failed <=> when failing in fetching/accessing the remote data
*/

function App({ login }) {
  const [data, setData] = useState(null);
  /*
  If the data cannot be fetched/displayed for any reason, we should notify the user
  we will add another useState calls:
  */

  // First Case: For loading issues:
  // passing the initial state of false
  const [loading, setLoading] = useState(false);

  // Second Case: For other errors issues:
  const [error, setError] = useState(null);


  // calling the "useEffect()": taking the arrow function as a callback function argument:
  useEffect(() => {
    // Adjusting our fetching process based on the "loading" and "error" states with if conditions:
    // First, let's check if there is no username/id/login so just terminate the entire function by "return" nothing:
    if (!login) return;

    // if there is a login, jumping to the next code line and we can set the "loading" varaible to true:
    setLoading(true);

    // adding another chain (adding a 3'rd "then" method) to the following fetch()

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]); // end useEffect: Passing the "login" into the dependency array of useEffect

  /*
  The reason for adding [login]
  So any time the value is changed like entering a different user
  in such case we need to make another new call to the Github API
  */

  // Handling our loading state (notify the user that data is in loading mode):
  if (loading) return <h2>Loading...</h2>;

  // Handling the error state:
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  // Handling the empty return (no data)
  if (!data) return null;

  // no need for this if:
  /*
  if (data) {
    the code as the previous example
  }
  */

  // Finally (the default action like with switch statement), display the component after passing all the above if conditions:
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
}

export default App;
