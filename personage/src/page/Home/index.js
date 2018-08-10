import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
const Home = () => (
    <div>
        <Header/>
        <Link to="/about">
            <h3>
                去about
            </h3>
        </Link>

    </div>
);
export default Home;
