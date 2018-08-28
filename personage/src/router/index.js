import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/article";
import Topics from "../page/articleList";
const RouterMap = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);
export default RouterMap ;