/**
 * Created by songyingchun on 2017/8/25 0025.
 */
import "@/style/common/common";
import "@/config/flexible";
import "babel-polyfill";

import React from "react";
import ReactDOM, {render} from "react-dom";
import Router,{
    BrowserRouter,
    HashRouter,
    Route,
    Link,
} from "react-router-dom";
import Routes from "@/router/router.jsx";
import Store from "@/store/index.js";

render(
    Routes,
    document.getElementById("app")
);
