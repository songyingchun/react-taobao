/**
 * Created by songyingchun on 2017/9/12.
 */
import React, {Component} from "react";
import "./cart.scss";
import Nav from "@/components/nav/nav.jsx";
import Config from "@/config";

const CartTitle = () => {
    return (
        <div className="cart-title">购物车</div>
    );
};

class CartList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectList: []
        };
    }

    select(index, picTextIndex) {
        const picTextItem = this.state.data[index].fContent[picTextIndex];
        picTextItem.isActive = !picTextItem.isActive;
        this.setState({data});
    }

    render() {
        return (
            <div className="cart-list">
                {
                    !this.props.loaded ? "" :
                        this.props.data.map((item, index) => {
                            return (
                                <div className="cart-item" key={index}>
                                    <div className="head">
                                        <i className="icon icon-chevron-right"></i>
                                        <img src={item.fShopImg} alt=""/>
                                        <span className="name">{item.fShopName}</span>
                                    </div>
                                    <div className="pic-text-list">
                                        {
                                            item.fContent.map((picTextItem, picTextIndex) => {
                                                return (
                                                    <div className="pic-text-item" key={picTextIndex}>
                                                        <div className="pic-text">
                                                            <span className="label"
                                                                  onClick={this.select.bind(this, index, picTextIndex)}></span>
                                                            <div className="pic">
                                                                <img src={picTextItem.fImg} alt=""/>
                                                            </div>
                                                            <div className="text-wrapper">
                                                                <div className="text">{picTextItem.fTitle}</div>
                                                                <div className="color-text">
                                                                    {picTextItem.fColor ? "颜色:" + picTextItem.fColor + ";" : ""}
                                                                    {picTextItem.fSize ? "尺寸:" + picTextItem.fSize + ";" : ""}
                                                                </div>
                                                                <div className="price">
                                                                    <span
                                                                        className="text">￥{picTextItem.fOldPrice}</span>
                                                                    <span
                                                                        className="text line-through">￥{picTextItem.fPrice}</span>
                                                                </div>
                                                                <div className="numberOperation">
                                                                    <span className="icon icon-android-remove"></span>
                                                                    <span className="number">1</span>
                                                                    <span className="icon icon-android-add"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                }
            </div>
        );
    }
}

class AccountBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="account-bar">
                <div className="select-all">
                    <span className="label"></span>全选
                </div>
                <div className="text-wrapper">
                    <div className="total-wrapper">
                        <div className="total">
                            <span className="label">合计：</span>
                            <span className="text">{}</span>
                        </div>
                        <p className="tips">不含运费</p>
                    </div>
                </div>
                <div className="account-button">
                    结算({})
                </div>
            </div>
        );
    }
}

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        fetch(Config.server.url.cart.goodsData)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data,
                    loaded: true
                });
            });
    }

    render() {
        return (
            <div className="cart">
                <CartTitle/>
                <div className="content">
                    <CartList {...this.state}/>
                </div>
                <AccountBar {...this.state}/>
                <Nav pathname={this.props.location.pathname}/>
            </div>
        );
    }
}

export default Cart;
