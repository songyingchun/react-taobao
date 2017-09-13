/**
 * Created by songyingchun on 2017/9/12.
 */
import React, {Component} from "react";
import Nav from "@/components/nav/nav.jsx";
import "./weitao.scss";

class Title extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="title">宝贝分类</div>
        );
    }
}

class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            menu: ["热门推荐", "女士服装", "女士鞋包", "男士服装", "男士鞋包", "手机数码", "妈咪宝贝", "护肤彩妆", "家纺家饰", "美食酒饮", "家电办公", "运动户外", "日用百货", "家具建材"],
            currentIndex: 0,
        };
    }

    render () {
        const items = this.state.menu.map((item, index)=>{
            return (
                <li className={"menu-item" + (this.state.currentIndex === index ? " active": "")} key={index}>
                    <span className="text">{item}</span>
                </li>
            );
        });

        return (
            <div className="menu">
                <ul className="menu-list">
                    {items}
                </ul>
            </div>
        );
    }
}

class Weitao extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {

    }
    render () {
        return (
            <div className="weitao">
                <Title />
                <Menu />
                <Nav pathname={this.props.location.pathname} />
            </div>
        );
    }
}

export default Weitao;
