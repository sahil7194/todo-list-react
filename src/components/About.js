import React from 'react'
import {  Link} from "react-router-dom";

export const About = () => {
    let aboutStyle = {
        minHeight : '88vh',
     }
    return (
        <div class="container mt-4" style={aboutStyle}>
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <h2>About Us</h2>
                <p>Welcome to our first React To-Do App! This project represents our initiation into the world of React
                    development. We are excited to share our learning journey and experiences with you.</p>
                <h4>What I've Learned</h4>
                <ul>
                    <li>React: Understanding the core principles of React, including component-based architecture and
                        virtual DOM.</li>
                    <li>React DOM: Working with React DOM for rendering components efficiently.</li>
                    <li>React Router: Implementing React Router for managing different views within our app.</li>
                    <li>Component Communication: Exploring methods of communication between React components.</li>
                </ul>
                <h4>Our Vision</h4>
                <p>We are committed to expanding our skills in React development and creating intuitive, responsive, and
                    feature-rich applications that cater to user needs.</p>
                <h4>Connect With Us</h4>
                
            </div>
        </div>
    </div>
    )
}


