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

import Home from "@/views/home/home.jsx";
import Weitao from "@/views/weitao/weitao.jsx";
import Discover from "@/views/discover/discover.jsx";
import Cart from "@/views/cart/cart.jsx";
import Person from "@/views/person/person.jsx";

if(env === "development") {

}

const router = () => (
    <HashRouter>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/weitao" component={Weitao}/>
            <Route path="/discover" component={Discover}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/person" component={Person}/>
        </div>
    </HashRouter>
);

export default router();
