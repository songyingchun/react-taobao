/**
 * Created by songyingchun on 2017/10/12.
 */
import React, { Component } from "react";
import "./success.scss";
import Config from "@/config";

class SuccessTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="success-title">
                <span className="text" onClick={this.props.routerHome}>完成</span>
                <i className="icon icon-chevron-right"></i>
            </div>
        );
    }
}

class SuccessContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const {deliveryInfo} = this.props;
        return (
            <div className="success-content">
                <div className="success-info">
                    <div className="success-name">
                        <span className="name">购物成功</span>
                    </div>
                    <div className="success-address">
                        <i className="icon icon-android-checkmark"></i>
                        <span className="address">收货地址：{deliveryInfo.address}</span>
                    </div>
                    <div className="success-tips">
                        （请注意查收）
                    </div>
                </div>
            </div>
        );
    }
}

class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    routerHome () {
        this.props.history.push({
            pathname: "home"
        });
    }

    componentDidMount() {
        this.fetch();
    }

    fetch () {
        fetch(Config.server.url.order.deliveryInfo)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    deliveryInfo: data,
                    deliveryInfoLoad: true
                });
            });
    }

    render() {
        return (
            <div className="success-page">
                <SuccessTitle routerHome={this.routerHome.bind(this)}/>
                {this.state.deliveryInfoLoad ? <SuccessContent {...this.state}/> : ""}
            </div>
        );
    }
}

export default Success;