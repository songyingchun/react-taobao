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

import "./router.scss";

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

            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">
                        <i className="icon icon-home"></i>
                        <span className="text">首页</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/weitao">
                        <i className="icon icon-radio-waves"></i>
                        <span className="text">微淘</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/discover">
                        <i className="icon icon-eye"></i>
                        <span className="text">发现</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart">
                        <i className="icon icon-ios7-cart"></i>
                        <span className="text">购物车</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/person">
                        <i className="icon icon-person"></i>
                        <span className="text">我的商城</span>
                    </Link>
                </li>
            </ul>
        </div>
    </HashRouter>
);

export default router();
