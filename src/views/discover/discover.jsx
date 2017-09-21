/**
 * Created by songyingchun on 2017/9/12.
 */
import React, {Component} from "react";
import "./discover.scss";
import Nav from "@/components/nav/nav.jsx";
import Config from "@/config";

class Discover extends Component {
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
        fetch(Config.server.url.discover.goodsData)
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
            <div className="discover">
                <DiscoverTitle />
                <Options />
                <GoodsList {...this.state} />
                <Nav pathname={this.props.location.pathname}/>
            </div>
        );
    }
}

class DiscoverTitle extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount () {

    }

    render () {
        return (
            <div className="discover-title">
                <div className="empty"></div>
                <div className="search">
                    <input type="text" className="text" placeholder="" />
                    <i className="icon icon-ios7-search-strong"></i>
                </div>
                <div className="empty">
                    <div className="icon-wrapper">
                        <i className="icon icon-android-more"></i>
                    </div>
                </div>
            </div>
        );
    }
}

class Options extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="option">
                <div className="option-wrapper">
                    <div className="option-list">
                        <div className="option-item rank-option">
                            <i className="icon icon-arrow-down-b"></i>
                            <span className="text">综合排序</span>
                        </div>
                        <div className="option-item sale-option">
                            <span className="text">销量优先</span>
                        </div>
                        <div className="option-item filter-option">
                            <i className="icon icon-arrow-down-b"></i>
                            <span className="text">筛选</span>
                        </div>
                        <div className="option-item type-option">
                            <i className="icon glyphicon glyphicon-th-list"></i>
                        </div>
                    </div>
                </div>
                <div className="panel-wrapper">
                    <div className="panel-list">
                        <div className="panel-item rank-panel">
                            <ul className="rank-panel-list">
                                <li className="rank-panel-item">
                                    <span className="text">综合排序</span>
                                    <i className="icon icon-checkmark"></i>
                                </li>
                                <li className="rank-panel-item">
                                    <span className="text">价格升序</span>
                                    <i className="icon icon-checkmark"></i>
                                </li>
                                <li className="rank-panel-item">
                                    <span className="text">价格降序</span>
                                    <i className="icon icon-checkmark"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="panel-item sale-panel">

                        </div>
                        <div className="panel-item filter-panel active">
                            <div className="filter-panel-wrapper">
                                <div className="price-area area">
                                    <span className="label">价格区间（元）</span>
                                    <input type="text" className="low-price" placeholder=""/>
                                    <span className="to">-</span>
                                    <input type="text" className="high-price" placeholder=""/>
                                </div>
                                <div className="service-area area">
                                    <span className="icon-wrapper">
                                        <i className="icon icon-ios7-arrow-down"></i>
                                    </span>
                                    <div className="title">折扣和服务</div>
                                    <div className="tap-list">
                                        <div className="tap-item">
                                            <span className="text">免运费</span>
                                        </div>
                                        <div className="tap-item">
                                            <span className="text">天猫</span>
                                        </div>
                                        <div className="tap-item">
                                            <span className="text">全球购</span>
                                        </div>
                                        <div className="tap-item">
                                            <span className="text">消费者保障</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="classify-area area">
                                    <span className="icon-wrapper">
                                        <i className="icon icon-ios7-arrow-down"></i>
                                    </span>
                                    <div className="title">
                                        分类：<span className="">所有分类</span>
                                    </div>
                                    <div className="tap-list">
                                        <div className="tap-item">
                                            <span className="text">3C数码配件市场</span>
                                        </div>
                                        <div className="tap-item">
                                            <span className="text">品牌手表/流行手表</span>
                                        </div>
                                        <div className="tap-item">
                                            <span className="text">女装</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="reset">
                                    <span className="text">
                                        重置
                                    </span>
                                </div>
                                <div className="confirm">
                                    <span className="text">
                                        确认
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="panel-item type-panel">

                        </div>
                    </div>
                </div>
                <div className="masker">
                    <div className="show-masker"></div>
                </div>
            </div>

        );
    }
}

class GoodsList extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="goods-list">
                <div className="goods-wrapper">
                    {
                        !this.props.loaded ? "" :
                            this.props.data.map((item, index)=>{
                                return (
                                    <div className="goods-item" key={index}>
                                        <div className="pic">
                                            <img src={item.fImg} alt=""/>
                                        </div>
                                        <div className="text-wrapper">
                                            <div className="caption">
                                                <p className="text">{item.fTitle}</p>
                                            </div>
                                            <div className="price">
                                                <i className="icon">￥</i>
                                                <span className="text">{item.fPrice}</span>
                                            </div>
                                            <div className="info">
                                                <span>月销</span>
                                                <span>{item.fRecord}</span>
                                                <span>笔</span>
                                                <span>{item.fPostage}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>
        );
    }
}
export default Discover;
