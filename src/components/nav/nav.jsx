/**
 * Created by songyingchun on 2017/9/6.
 */
import React from "React";
import "./nav.scss";
class Nav extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            navInfoList: [{
                text: "首页",
                icon: "icon-home",
            }, {
                text: "微淘",
                icon: "icon-radio-waves",
            }, {
                text: "发现",
                icon: "icon-eye",
            }, {
                text: "购物车",
                icon: "icon-ios7-cart",
            }, {
                text: "我的商城",
                icon: "icon-person",
            }]
        };
    }

    componentDidMount () {

    }

    componentWillUnmount () {

    }

    render () {
        const list = () => {
            const res = [];
            for(let i = 0; i < this.state.navInfoList.length; i++) {
                const item = this.state.navInfoList[i];
                res.push(
                    <div className={"nav-item" + (this.props.navIndex == i ? " active": "")} key={i}>
                        <i className={"icon " + item.icon}></i>
                        <span className="text">{item.text}</span>
                    </div>
                );
            }
            return res;
        };
        return (
            <div>
                <div className="nav-list">
                    {list()}
                </div>
            </div>
        );
    }
}

export default Nav;
