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
- App8.js

for more learning, understanding, and demonstration purposes

Thanks,
Anmar
*/

/*
NOTE:
Modifying the main file "App.js" to make it simple, short, and easy 
just to run the React Testing Libraries
*/

function App({ }) {
  return (
    <div>
      <h1>Hello React Testing Library</h1>
    </div>
  );
}

export default App;
