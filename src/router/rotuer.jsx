/**
 * Created by songyingchun on 2017/8/22.
 */
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import Router from "react-router";

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default Roots;