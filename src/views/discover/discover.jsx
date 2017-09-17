/**
 * Created by songyingchun on 2017/9/12.
 */
import React, {Component} from "react";
import "./discover.scss";

class Discover extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {

    }
    render () {
        return (
            <div className="discover">
                <DiscoverTitle />
                <Options />
            </div>
        );
    }
}

class DiscoverTitle extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount () {

    }

    render () {
        return (
            <div className="discover-title">
                <div className="empty"></div>
                <div className="search">
                    <input type="text" className="text" placeholder="" />
                    <i className="icon icon-ios7-search-strong"></i>
                </div>
                <div className="empty"></div>
            </div>
        );
    }
}

class Options extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="option">
                <div className="option-wrapper">
                    <div className="option-list">
                        <div className="option-item rank-option">
                            <i className="icon icon-arrow-down-b"></i>
                            <span className="text">综合排序</span>
                        </div>
                        <div className="option-item sale-option">
                            <span className="text">销量优先</span>
                        </div>
                        <div className="option-item filter-option">
                            <i className="icon icon-arrow-down-b"></i>
                            <span className="text">筛选</span>
                        </div>
                        <div className="option-item type-option">
                            <i className="icon glyphicon glyphicon-th-list"></i>
                        </div>
                    </div>
                </div>
                <div className="panel-wrapper">
                    <div className="panel-list">
                        <div className="panel-item rank-panel">
                            <ul className="rank-panel-list">
                                <li className="rank-panel-item">
                                    <span className="text">综合排序</span>
                                    <i className="icon icon-checkmark"></i>
                                </li>
                                <li className="rank-panel-item">
                                    <span className="text">价格升序</span>
                                    <i className="icon icon-checkmark"></i>
                                </li>
                                <li className="rank-panel-item">
                                    <span className="text">价格降序</span>
                                    <i className="icon icon-checkmark"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="panel-item sale-panel">

                        </div>
                        <div className="panel-item filter-panel active">
                            <div className="filter-panel-wrapper">
                                <div className="price-area">
                                    <span className="label">价格区间（元）</span>
                                    <input type="text" className="low-price" placeholder=""/>
                                    <span className="to">-</span>
                                    <input type="text" className="high-price" placeholder=""/>
                                </div>
                            </div>
                        </div>
                        <div className="panel-item type-panel">

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Discover;
