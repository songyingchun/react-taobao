/**
 * Created by songyingchun on 2017/9/5.
 */
import React from "react";
import "./pullup.scss";

class Pullup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount () {

    }

    componentWillUnmount () {

    }

    render () {
        return (
            <div>
                <div className="pull-up">
                    <span className="pull-up-label">
                        已经到最后.
                    </span>
                </div>
            </div>
        );
    }
}

export default Pullup;
