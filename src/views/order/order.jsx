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
        const {deliveryInfo, order} = this.props;
        return (
            <div className="order-content">
                <div className="delivery-info">
                    <div className="delivery-name">
                        <span className="name">收货人: {deliveryInfo.name}</span>
                        <span className="phone">{deliveryInfo.mobile}</span>
                    </div>
                    <div className="delivery-address">
                        <i className="icon icon-ios7-location icon-location"></i>
                        <span className="address">收货地址：{deliveryInfo.address}</span>
                        <i className="icon icon-ios7-arrow-forward icon-forward"></i>
                    </div>
                    <div className="delivery-tips">
                        （收货不方便时，可选择代收货服务）
                    </div>
                </div>
                <div className="delivery-shop">
                    <div className="shop-list">
                        {
                            order.fContent.map((item, index)=>{
                                return (
                                    <div className="shop-item" key={index}>
                                        <div className="delivery-shop-title">
                                            <img src={order.fShopImg} alt=""/>
                                            <span className="shop-name">{order.fShopName}</span>
                                        </div>
                                        <div className="delivery-shop-content">
                                            <div className="pic-text">
                                                <div className="pic">
                                                    <img src={item.fImg} alt=""/>
                                                </div>
                                                <div className="text-wrapper">
                                                    <div className="text">
                                                        {item.fTitle}
                                                    </div>
                                                    <div className="color-text">
                                                        颜色:{item.fColor};尺寸:{item.fSize};
                                                    </div>
                                                    <div className="price">
                                                        <span className="text">￥{item.fPrice * item.fNumber}</span>
                                                    </div>
                                                    <div className="number">x{item.fNumber}</div>
                                                </div>
                                            </div>
                                            <div className="delivery-info-list">
                                                <div className="delivery-info-item type-item">
                                                    <span className="label">配送方式</span>
                                                    <span className="text">
                                                        快递 {item.fPostage}<i className="icon icon-ios7-arrow-right"></i>
                                                    </span>
                                                </div>
                                                <div className="delivery-info-item safe-item">
                                                    <span className="label">运费险</span>
                                                    <span className="text">
                                                        <i className="icon icon-ios7-arrow-right"></i>
                                                    </span>
                                                </div>
                                                <div className="delivery-info-item word-item">
                                                    <span className="label">买家留言：</span>
                                                    <input type="text" placeholder="选填，可填写您和卖家达成的协议"/>
                                                </div>
                                                <div className="delivery-info-item account-item">
                                                    <span className="text">共{item.fNumber}件商品</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>    
                </div>
            </div>
        );
    }
}

class OrderBar extends Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        const {order} = this.props;
        let account = 0;
        order.fContent.forEach((item, index)=>{
            account += parseInt(item.fNumber) * parseInt(item.fPrice);
        });
        return (
            <div className="order-bar">
                <div className="account">
                    <span className="label">合计：</span>
                    <span className="text">￥{account}</span>
                </div>
                <div className="confirm" onClick={this.props.routerSuccess.bind(this)}>确认</div>
            </div>
        );
    }
}

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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

        fetch(Config.server.url.order.order)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    order: data,
                    orderLoad: true
                });
            });
    }

    routerSuccess () {
        this.props.history.push({
            pathname: "success"
        });
    }

    render() {
        return (
            <div className="order-page">
                <OrderTitle />
                {this.state.deliveryInfoLoad && this.state.orderLoad ? <OrderContent {...this.state}/> : ""}
                {this.state.orderLoad ? <OrderBar routerSuccess={this.routerSuccess.bind(this)} {...this.state}/> : ""}
            </div>
        );
    }
}

export default Order;