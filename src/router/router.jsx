/**
 * Created by songyingchun on 2017/8/25.
 */
import React from "react";
import Router,{
    BrowserRouter,
    HashRouter,
    Route,
    Link
} from "react-router-dom";

const env = process.env.NODE_ENV;

if(env === "development") {

}

const Home = () => (
    <div>
        <h2>Home123132</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
    </div>
);

const router = () => (
    <HashRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </HashRouter>
);

export default router();