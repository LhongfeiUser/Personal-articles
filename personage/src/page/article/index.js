import React from "react";
import { Link } from "react-router-dom";
const About = () => (
    <div>
        <h2>About</h2>
        <Link to='/'>
            <h3>返回home</h3>
        </Link>
    </div>
);
export default About;