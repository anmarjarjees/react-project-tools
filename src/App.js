import logo from './logo.svg';
import './App.css';
// We need to import the "useState" and "useEffect" Hooks for this demonstration:
import { useState, useEffect } from "react";

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
- App9.js

for more learning, understanding, and demonstration purposes

Thanks,
Anmar
*/

// Importing Routers components from pages.js file:
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Error404,
  Services,
  Portfolio
} from "./pages"


/*
NOTE:
Modifying the main file "App.js" to make it simple, short, and easy 
just to run the React Testing Libraries
*/

function App({ }) {
  return (
    <div>
      <Routes>
        {/*  
        Creating a route for every individual function/page. We have 4 pages so we need 4 Route:
        Each one will have a path property to target its function/page
        */}


        <Route path="/" element={<Home />} /> {/* http://localhost:3000/ */}
        <Route path="/about" element={<About />}> {/* http://localhost:3000/about */}
          <Route path="services" element={<Services />} />  {/* http://localhost:3000/about/services */}
          <Route path="portfolio" element={<Portfolio />} />  {/* http://localhost:3000/about/portfolio */}
        </Route>
        <Route path="/events" element={<Events />} /> {/* http://localhost:3000/events */}
        <Route path="/contact" element={<Contact />} /> {/* http://localhost:3000/contact */}
        <Route path="*" element={<Error404 />} /> {/* http://localhost:3000/invalid name */}
      </Routes>
    </div>
  );
}

export default App;
