/*
This for controlling all the pages:
*/
import React from "react";

/* 
Adding links (menu) for user-friendly navigation:
importing the {link} first

Also importing another hook "useLocation",
this function can return our current location

Finally importing "Outlet" for displaying nested menu items
*/
import { Link, useLocation, Outlet } from "react-router-dom"

/*
Exporting different functions for loading every individual page
Similar to Flask main python file for loading all the html pages
*/
export function Home() {
    return (

        <div>
            {/* Adding the links: */}
            <nav>
                <Link to="">Home</Link><br />
                <Link to="about">About</Link><br />
                <Link to="events">Events</Link><br />
                <Link to="contact">Contact</Link><br />
            </nav>


            <h1>Welcome to our company website</h1>
            <p>Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.</p>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>About ReactJS</h1>
            <p>Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.</p>
            {/* Adding Outlet component which is responsible for displaying the nested component */}
            <Outlet />
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>React Events</h1>
            <p>Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.</p>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>Contact ReactJS</h1>
            <p>Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.</p>
        </div>
    );
}

// Adding a fallback function for a broken or invalid link:
export function Error404() {
    let location = useLocation();
    // testing the object variable "location"
    /*
    hash: ""
    key: "default"
    pathname: "/test"
    search: ""
    state: null
    [[Prototype]]: Object
    */
    console.log(location);
    return (
        <div>
            <h1>Invalid Page Link! No such page named "{location.pathname}"</h1>
        </div>
    );
}

// Adding nesting links:
export function Services() {
    return (
        <div>
            <h1>Our Products</h1>
            <p>Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.</p>
        </div>
    )
}

export function Portfolio() {
    return (
        <div>
            <h1>Our Portfolio</h1>
            <p>Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.</p>
        </div>
    )
}