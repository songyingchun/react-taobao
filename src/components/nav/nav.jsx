/**
 * Created by songyingchun on 2017/9/6.
 */
import React from "React";
import {Link} from "react-router-dom";
import "./nav.scss";
class Nav extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            links: [{
                text: "首页",
                icon: "icon-home",
                url: "/home"
            }, {
                text: "微淘",
                icon: "icon-radio-waves",
                url: "/weitao"
            }, {
                text: "发现",
                icon: "icon-eye",
                url: "/discover"
            }, {
                text: "购物车",
                icon: "icon-ios7-cart",
                url: "/cart"
            }, {
                text: "我的商城",
                icon: "icon-person",
                url: "/person"
            }]
        };
    }

    render () {
        let pathname = this.props.pathname;
        if(pathname === "/"){
            pathname = "/home";
        }
        const links = this.state.links;
        const items = links.map((item, index)=>{
            const link = (
                <li className={"nav-item" + (pathname == item.url ? " active" : "")} key={index}>
                    <Link to={item.url} key={index}>
                        <i className={"icon " + item.icon}></i>
                        <span className="text">{item.text}</span>
                    </Link>
                </li>
            );
            return link;
        });

        return (
            <div>
                <div className="nav-list">
                    {items}
                </div>
            </div>
        );
    }
}

export default Nav;
