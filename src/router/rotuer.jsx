/**
 * Created by songyingchun on 2017/8/22.
 */
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import Router from "react-router";

export default React.createClass({
    getInitialState() {
        return { num: this.getRandomNumber() };
    },

    getRandomNumber() {
        return Math.ceil(Math.random() * 6);
    },

    render() {
        return <div>
            Your dice roll:
        </div>;
    }
});