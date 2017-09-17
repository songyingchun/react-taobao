/**
 * Created by songyingchun on 2017/9/12.
 */
import React, {Component} from "react";
import Nav from "@/components/nav/nav.jsx";
import Config from "@/config/";
import BScroll from "better-scroll";
import "./weitao.scss";

class Title extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="weitao-title">宝贝分类</div>
        );
    }
}

class Content extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {},
            loaded: false
        };
    }

    componentDidMount () {
        this.fetch();
    }

    fetch () {
        fetch(Config.server.url.weitao.menuData)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    data: data,
                    loaded: true
                });
            });

    }

    render () {
        return (
            <div className="content">
                <Menu  {...this.state} />
                <Panel {...this.state} />
            </div>
        );
    }
}

class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }

    componentDidMount () {

    }

    componentDidUpdate () {
        const self = this;
        let scroll = new BScroll(this.refs.menu, {
            click: true
        });
    }

    menuItemClick (index) {
        this.setState({
            currentIndex: index
        });
    }

    render () {
        return (
            <div className="menu" ref="menu">
                <ul className="menu-list menu-wrapper">
                    {
                        !this.props.loaded ?
                            [] :
                            this.props.data.rows.map((item, index)=>{
                                return (
                                    <li className={"menu-item" + (this.state.currentIndex === index ? " active": "")} key={index} onClick={this.menuItemClick.bind(this, index)}>
                                        <span className="text">{item.fClassName}</span>
                                    </li>
                                );
                            })
                    }
                </ul>
            </div>
        );
    }
}

class Panel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount () {

    }

    componentDidUpdate () {
        console.log("Updata");
        let scroll = new BScroll(this.refs.panel, {
            click: true
        });
    }

    render () {
        let items = [];
        console.log(this.props.loaded);
        if(this.props.loaded) {
            items = this.props.data.rows.map((item, index)=>{
                return (
                    <li className={"panel-item" + (this.state.currentIndex === index ? " active" : "")} key={index}>
                        {
                            !item.fPanel ? "" : item.fPanel.map((item2, index2)=>{
                                return (
                                    <div key={index2}>
                                        <div className="panel-title">{item2.fClassName}</div>
                                        <div className="pic-text-list">
                                            {
                                                item2.content.map((item3, index3)=>{
                                                    return (
                                                        <div className="pic-text-item" key={index3}>
                                                            <img src={item3.fClassImg} alt=""/>
                                                            <span className="text">{item3.fClassName}</span>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </li>
                );
            });
        }

        return (
            <div className="panel" ref="panel">
                <ul className="panel-list panel-wrapper">
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
                <Content />
                <Nav pathname={this.props.location.pathname} />
            </div>
        );
    }
}

export default Weitao;
