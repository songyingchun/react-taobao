/**
 * Created by songyingchun on 2017/9/12.
 */
import React, {Component} from "react";
import Router,{
    BrowserRouter,
    HashRouter,
    Route,
    Link
} from "react-router-dom";
import "./cart.scss";
import Nav from "@/components/nav/nav.jsx";
import Config from "@/config";

const CartTitle = () => {
    return (
        <div className="cart-title">购物车</div>
    );
};

class CartList extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    componentWillMount () {
        console.log("componentWillMount");
    }

    componentDidMount () {
        console.log("componentDidMount");
    }

    componentWillReceiveProps () {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate () {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate () {
        console.log("componentWillUpdate");
    }

    render() {
        console.log(this.props);
        return (
            <div className="cart-list">
                {
                    this.state.data.map((item, index) => {
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
                                                        <span className={"label" + (picTextItem.isActive ? " active": "")} onClick={this.props.select.bind(this, index, picTextIndex)}></span>
                                                        <div className="pic" onClick={this.props.picRoute.bind(this, picTextItem)}>
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
                                                                    className="text">￥{picTextItem.fPrice}</span>
                                                                <span
                                                                    className="text line-through">￥{picTextItem.fOldPrice}</span>
                                                            </div>
                                                            <div className="numberOperation">
                                                                <span className="icon icon-android-remove" onClick={this.props.selectNumber.bind(this, index, picTextIndex, -1)}></span>
                                                                <span className="number">{picTextItem.selectNumber || 1}</span>
                                                                <span className="icon icon-android-add" onClick={this.props.selectNumber.bind(this, index, picTextIndex, 1)}></span>
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

    componentDidUpdate () {
        console.log("componentDidUpdate");
    }
}

class AccountBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.isSelectAll);
        return (
            <div className="account-bar">
                <div className="select-all" onClick={this.props.selectAll.bind(this)}>
                    <span className={"label" + (this.props.isSelectAll ? " active" : "")}></span>全选
                </div>
                <div className="text-wrapper">
                    <div className="total-wrapper">
                        <div className="total">
                            <span className="label">合计：</span>
                            <span className="text">{"￥" + this.props.account}</span>
                        </div>
                        <p className="tips">不含运费</p>
                    </div>
                </div>
                <div className="account-button">
                    结算({this.props.number})
                </div>
            </div>
        );
    }
}

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            isSelectAll: false,
            account: 0
        };
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
                    {!this.state.loaded ? "" : <CartList {...this.state} select={this.select.bind(this)} selectNumber={this.selectNumber.bind(this)} picRoute={this.picRoute.bind(this)}/>}
                </div>
                {!this.state.loaded ? "" : <AccountBar {...this.state} selectAll={this.selectAll.bind(this)}/>}
                <Nav pathname={this.props.location.pathname}/>
            </div>
        );
    }

    select(index, picTextIndex) {
        const picTextItem = this.state.data[index].fContent[picTextIndex];
        let {isActive, selectNumber = 0, fPrice} = picTextItem;
        let {number, account, data} = this.state;
        let count = 1;
        isActive = !isActive;
        if(!isActive) {
            count = -1;
        }else {
            if(!selectNumber) {
                selectNumber += 1;
            }
        }
        picTextItem.isActive = isActive;
        picTextItem.selectNumber = selectNumber;
        number += count;
        if(number <= 0) {
            number = 0;
        }
        this.setState({
            number,
            account: account + (selectNumber || 1) * count * parseFloat(fPrice),
            data: this.state.data,
        });
    }

    selectAll() {
        let {account, number, isSelectAll, data} = this.state;
        let count = 1;
        isSelectAll = !isSelectAll;
        if(!isSelectAll) {
            count = -1;
        }
        this.state.data.map((item, index)=>{
            item.fContent.map((picTextItem, picTextIndex)=>{
                picTextItem.isActive = !picTextItem.isActive;
                number += 1 * count;
                if(!picTextItem.selectNumber) {
                    picTextItem.selectNumber = 1;
                }
                account += (picTextItem.selectNumber || 1) * count * parseFloat(picTextItem.fPrice);
            });
        });
        this.setState({
            data: this.state.data,
            isSelectAll,
            account,
            number
        });
    }

    selectNumber (index, picItemIndex, count) {
        const picTextItem = this.state.data[index].fContent[picItemIndex];
        picTextItem.selectNumber = (picTextItem.selectNumber || 0) + count;
        if(picTextItem.selectNumber <= 0) {
            picTextItem.selectNumber = 0;
            picTextItem.isActive = false;
        }else {
            picTextItem.isActive = true;
        }

        this.setState({
            data: this.state.data,
            account: this.state.account + count * parseFloat(picTextItem.fPrice)
        });
    }

    picRoute (picTextItem) {
        this.props.history.push({
            pathname: "detail",
            search: "?goodsID=" + picTextItem.id + "&shopID=" + picTextItem.fShopID,
        });
    }
}

export default Cart;
