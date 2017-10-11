/**
 * Created by songyingchun on 2017/10/11.
 */
import React, { Component } from "react";
import "./order.scss";
import Config from "@/config";

class OrderTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="order-title">
                <i className="icon icon-chevron-left"></i>
                <span className="text">确认订单</span>
            </div>
        );
    }
}

class OrderContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="order-content">
                <div className="delivery-info">
                    <div className="delivery-name">
                        <span className="name">收货人：张三</span>
                        <span className="phone">13758547152</span>
                    </div>
                    <div className="delivery-address">
                        <i className="icon icon-ios7-location icon-location"></i>
                        <span className="address">收货地址：云南省昆明市高新区昌源北路300号城市新A座1508室</span>
                        <i className="icon icon-ios7-arrow-forward icon-forward"></i>
                    </div>
                    <div className="delivery-tips">
                        （收货不方便时，可选择代收货服务）
                    </div>
                </div>
            </div>
        );
    }
}

class Order extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="order-page">
                <OrderTitle />
                <OrderContent />
            </div>
        );
    }
}

export default Order;