/**
 * Created by songyingchun on 2017/8/25.
 */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

const Home = React.createClass({
    render() {
        return (<h3>
            <Link to="/about">About</Link>
            <Link to="/about">About</Link>
        </h3>);
    }
});

const About = React.createClass({
    render() {
        return (<h3>About</h3>);
    }
});

ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component={Home} />
            <Route path="/about" component={About}/>
        </div>
    </Router>
), document.getElementById("app"));