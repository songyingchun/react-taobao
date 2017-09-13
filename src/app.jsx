/**
 * Created by songyingchun on 2017/8/25 0025.
 */
import "@/style/common/common";
import "@/config/flexible";

import React from "react";
import ReactDOM, {render} from "react-dom";
import Router,{
    BrowserRouter,
    HashRouter,
    Route,
    Link,
} from "react-router-dom";
import Routes from "@/router/router.jsx";

render(
    Routes,
    document.getElementById("app")
);
