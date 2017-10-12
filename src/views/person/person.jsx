/**
 * Created by songyingchun on 2017/9/13.
 */
import React, {Component} from "react";
import "./person.scss";
import Nav from "@/components/nav/nav.jsx";

class LoginContent extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className="login-content">
                <LoginPanel />
                <RouterList />
                <LoginList />
            </div>
        );
    }
}

class LoginPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className="login-panel">
                <div className="login-button">登录</div>
                <div className="register-button">注册</div>
            </div>
        );
    }
}

class RouterList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="router-list">
                <div className="router-item">
                    <i className="icon icon-chatbubble-working"></i>
                    <span className="text">同团聊</span>
                </div>
                <div className="router-item">
                    <i className="icon icon-document"></i>
                    <span className="text">我的订单</span>
                </div>
                <div className="router-item">
                    <i className="icon icon-bag"></i>
                    <span className="text">商城</span>
                </div>
                <div className="router-item">
                    <i className="icon icon-ios7-star-outline"></i>
                    <span className="text">我的收藏</span>
                </div>
            </div>
        );
    }
}

class LoginList extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="login-list">
                <div className="login-item">
                    <div className="left">
                        <span className="text">我的小金库</span>
                        <i className="icon icon-ios7-box-outline"></i>
                    </div>
                    <div className="right">
                        <span className="text">抵用卷、旅游卷</span>
                        <i className="icon icon-ios7-arrow-forward"></i>
                    </div>
                </div>
                <div className="login-item">
                    <div className="left">
                        <span className="text">会员俱乐部</span>
                        <i className="icon icon-social-reddit-outline"></i>
                    </div>
                    <div className="right">
                        <span className="text">活动、权益</span>
                        <i className="icon icon-ios7-arrow-forward"></i>
                    </div>
                </div>
                <div className="login-item">
                    <div className="left">
                        <span className="text">活动</span>
                        <i className="icon icon-ios7-cart-outline"></i>
                    </div>
                    <div className="right">
                        <span className="text">抢购、红包、夺宝</span>
                        <i className="icon icon-ios7-arrow-forward"></i>
                    </div>
                </div>
                <div className="login-item">
                    <div className="left">
                        <span className="text">资料管家</span>
                        <i className="icon icon-android-storage"></i>
                    </div>
                    <div className="right">
                        <span className="text">个人资料、常旅资料</span>
                        <i className="icon icon-ios7-arrow-forward"></i>
                    </div>
                </div>
                <div className="login-item">
                    <div className="left">
                        <span className="text">牛拉牛</span>
                        <i className="icon icon-social-freebsd-devil"></i>
                    </div>
                    <div className="right">
                        <span className="text"></span>
                        <i className="icon icon-ios7-arrow-forward"></i>
                    </div>
                </div>
                <div className="login-item">
                    <div className="left">
                        <span className="text">社区</span>
                        <i className="icon icon-ios7-people-outline"></i>
                    </div>
                    <div className="right">
                        <span className="text">抵用卷、旅游卷</span>
                        <i className="icon icon-ios7-arrow-forward"></i>
                    </div>
                </div>
                <div className="login-item">
                    <div className="left">
                        <span className="text">其他...</span>
                    </div>
                    <div className="right">
                        <span className="text"></span>
                        <i className="icon icon-ios7-arrow-forward"></i>
                    </div>
                </div>
            </div>
        );
    }
}

class Person extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {

    }
    render () {
        return (
            <div className="person-page">
                <LoginContent />
                <Nav pathname={this.props.location.pathname}/>
            </div>
        );
    }
}

export default Person;
