/**
 * Created by songyingchun on 2017/9/26.
 */
import React, {Component} from "react";
import "./detail.scss";
import Config from "@/config";

class DetailPic extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = this.props.goodsData[0];
        return (
            <div className="detail-pic">
                <img src={data.fImg} alt=""/>
            </div>
        );
    };
}

class DetailInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = this.props.goodsData[0];
        return (
            <div className="detail-info">
                <div className="caption">
                    {data.fTitle}
                </div>
                <div className="wx-share">
                    <i className="icon icon-android-share"></i>
                    <span className="text">分享</span>
                </div>
                <div className="price">
                    <span className="text">￥{data.fPrice}</span>
                </div>
                <div className="old-price">
                    <span className="label">
                        价格：
                    </span>
                    <span className="text">
                        ￥{data.fOldPrice}
                    </span>
                </div>
                <div className="info">
                    <span>快递 {data.fPostage}</span>
                    <span>月销 {data.fRecord}笔</span>
                    <span>{data.fAddress}</span>
                </div>
            </div>
        );
    };
}

class SelectColor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="select-color" onClick={this.props.showColorClassifyMasker.bind(this)}>
                <span className="text">选择颜色分类</span>
                <i className="icon icon-chevron-right"></i>
            </div>
        );
    }
}

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = this.props.commentsData[0];
        console.log(data);
        return (
            <div className="comment">
                <div className="title">宝贝评价( {data.id} )</div>
                <div className="head">
                    <div className="pic">
                        <img src={data.fUserImg} alt=""/>
                    </div>
                    <span className="name">{data.fUserName}</span>
                </div>
                <div className="text">
                    {data.fContent}
                </div>
                <div className="time">
                    {data.fData}
                </div>
                <div className="more">
                    查看更多评论
                </div>
            </div>
        );
    }
}

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const shopData = this.props.shopData[0];
        const goodsData = this.props.goodsData[0];
        console.log(this.props);
        return (
            <div className="shop">
                <div className="info">
                    <div className="head">
                        <div className="pic">
                            <img src={shopData.fShopImg} alt=""/>
                        </div>
                        <div className="text-wrapper">
                            <div className="name">{shopData.fShopName}</div>
                            <span className="score">{shopData.fLevel}</span>
                        </div>
                    </div>
                    <div className="shop-comment">
                        <div className="description">
                            <span className="text">描述相符</span>
                            <span className="score">{shopData.fConsistent}</span>
                        </div>
                        <div className="attitude">
                            <span className="text">服务态度</span>
                            <span className="score">{shopData.fService}</span>
                        </div>
                    </div>
                    <div className="shop-info">
                        <div className="treasure">
                            <span className="number">{shopData.fGoodsNumber}</span>
                            <span className="text">全部宝贝</span>
                        </div>
                        <div className="notice">
                            <span className="number">{shopData.fFocusNumber}</span>
                            <span className="text">关注人数</span>
                        </div>
                    </div>
                    <div className="classify">
                        <div className="check">
                            <i className="icon icon-navicon"></i>
                            <span className="text">查看宝贝分类</span>
                        </div>
                        <div className="link">
                            <i className="icon icon-bag"></i>
                            <span className="text">进店逛逛</span>
                        </div>
                    </div>
                </div>
                <div className="pic-box">
                    <div className="ctroller ctrl-list">
                        <span className="ctrl-item active">
                            图文详情
                        </span>
                        <span className="ctrl-item">
                            产品参数
                        </span>
                    </div>
                    <div className="content">
                        <div className="pic">
                            <img src={goodsData.fImg} alt=""/>
                        </div>
                        <div className="text">
                            {goodsData.fDetail}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class DetailNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="detail-nav">
                <div className="nav-service">
                    <i className="icon icon-ios7-chatboxes-outline"></i>
                    <span className="text">客服</span>
                </div>
                <div className="nav-shop">
                    <i className="icon icon-bag"></i>
                    <span className="text">店铺</span>
                </div>
                <div className="nav-collection">
                    <i className="icon icon-ios7-star-outline"></i>
                    <span className="text">收藏</span>
                </div>
                <div className="nav-cart">
                    <span className="text">加入购物车</span>
                </div>
                <div className="nav-buy">
                    <span className="text">立即购买</span>
                </div>
            </div>
        );
    }
}

class Masker extends Component {
    constructor (props){
        super(props);
        this.state = {};
    }
    render() {
        const data = this.props.goodsData[0];
        console.log(this.props);
        return (
            <div>
                <div className={"masker detail-masker" + (this.props.isShowColorClassifyMasker ? " active" : "")}>
                    <div className="show-masker" onClick={this.props.hideColorClassifyMasker.bind(this)}></div>
                    <div className="color-classify">
                        <div className="pic-text">
                            <div className="pic">
                                <img src={require("./icon/pic4.png")} alt=""/>
                            </div>
                            <div className="text-wrapper">
                                <span className="price">￥{data.fPrice}</span>
                                <div className="store">
                                    库存 {data.fRecord} 件
                                </div>
                                <div className="text">
                                    请选择颜色分类
                                </div>
                            </div>
                        </div>
                        <div className="close icon-ios7-close-outline icon"></div>
                        <div className="color-classify-title">
                            颜色分类
                        </div>
                        <div className="color-classify-list">
                            <div className="color-classify-item">
                                草绿（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                橙色（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                蓝色（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                粉红（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                黑色（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                红色（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                黄色（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                绿色（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                黑蓝（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                天蓝（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                紫色（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                棕色（12支/盒）
                            </div>
                            <div className="color-classify-item">
                                12色混装（12支/盒）
                            </div>
                        </div>
                        <div className="color-classify-bar">
                            <div className="cart">
                                加入购物车
                            </div>
                            <div className="buy">
                                立即购买
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowColorClassifyMasker: false
        };
    }

    componentDidMount() {
        this.fetchGoodsData();
        this.fetchCommentsData();
        this.fetchShopData();
    }

    fetchGoodsData() {
        fetch(Config.server.url.detail.goodsData)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    goodsData: data,
                    loadedGoodsData: true
                });
            });
    }

    fetchCommentsData() {
        fetch(Config.server.url.detail.commentsData)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    commentsData: data,
                    loadedCommentsData: true
                });
            });
    }

    fetchShopData() {
        fetch(Config.server.url.detail.shopData)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    shopData: data,
                    loadedShopData: true
                });
            });
    }

    showColorClassifyMasker() {
        this.setState({
            "isShowColorClassifyMasker": true
        });
    }

    hideColorClassifyMasker() {
        this.setState({
            "isShowColorClassifyMasker": false
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="detail">
                <div className="back icon-wrapper">
                    <i className="icon icon-chevron-left"></i>
                </div>
                <div className="cart icon-wrapper">
                    <i className="icon icon-ios7-cart"></i>
                </div>
                <div className="more icon-wrapper">
                    <i className="icon icon-android-more"></i>
                </div>
                {this.state.loadedGoodsData ? <DetailPic {...this.state}/> : ""}
                {this.state.loadedGoodsData ? <DetailInfo {...this.state}/> : ""}
                <SelectColor {...this.state} showColorClassifyMasker={this.showColorClassifyMasker.bind(this)}/>
                {this.state.loadedCommentsData ? <Comment {...this.state}/> : ""}
                {this.state.loadedShopData && this.state.loadedGoodsData ? <Shop {...this.state}/> : ""}
                {this.state.loadedGoodsData ? <Masker {...this.state} hideColorClassifyMasker={this.hideColorClassifyMasker.bind(this)}/> : ""}
                <DetailNav/>
            </div>
        );
    }
}

export default Detail;
