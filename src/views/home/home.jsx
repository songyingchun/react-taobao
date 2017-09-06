/**
 * Created by songyingchun on 2017/9/3.
 */
import React from "react";
import "./home.scss";
import Banner from "@/components/banner/banner.jsx";
import Pullup from "@/components/pullup/pullup.jsx";
import Nav from "@/components/nav/nav.jsx";
import Config from "@/config/index.js";

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            navIndex: 0
        };
    }
    componentDidMount() {

    }
    componentWillUnmount() {
        this.fetch();
    }
    fetch () {
        fetch(Config.server.data.goodsData).then((response)=>{
            if(response.status === 200) {
                response.json().then((data)=>{
                    this.state.data = response.data;
                });
            }
        });
    }
    render () {
        return (
            <div>
                <div className="panel-top">
                    <div className="title-bar">
                        <div className="title-left">
                            <div className="scan">
                                <i className="icon glyphicon glyphicon-qrcode"></i>
                                <span className="text">扫一扫</span>
                            </div>
                        </div>
                        <div className="title-center">
                            <i className="icon icon-ios7-search-strong"></i>
                            <span className="text">芊芊玉手如何保养</span>
                            <div className="line"></div>
                        </div>
                        <div className="title-right">
                            <div className="empty"></div>
                            <div className="news">
                                <i className="icon icon-ios7-chatbubble"></i>
                                <span className="text">消息</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-content">
                    <Banner/>
                    <div className="list">
                        <div className="item">
                            <img src={require("./icon/menu1.png")} alt=""/>
                            <span className="text">天猫</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu2.png")} alt=""/>
                            <span className="text">聚划算</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu3.png")} alt=""/>
                            <span className="text">淘生活</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu4.png")} alt=""/>
                            <span className="text">淘点点</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu5.png")} alt=""/>
                            <span className="text">天猫超市</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu6.png")} alt=""/>
                            <span className="text">充值</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu7.png")} alt=""/>
                            <span className="text">旅行</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu8.png")} alt=""/>
                            <span className="text">金币</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu9.png")} alt=""/>
                            <span className="text">宝箱</span>
                        </div>
                        <div className="item">
                            <img src={require("./icon/menu10.png")} alt=""/>
                            <span className="text">分类</span>
                        </div>
                    </div>
                    <div className="purchase">
                        <div className="col-ab">
                            <img src={require("./icon/hotPic1.png")} alt=""/>
                        </div>
                        <div className="col-c">
                            <img src={require("./icon/hotPic2.png")} className="pic2" alt=""/>
                            <img src={require("./icon/hotPic3.png")} className="pic3" alt=""/>
                            <img src={require("./icon/hotPic4.png")} className="pic4" alt=""/>
                        </div>
                    </div>
                    <div className="free">
                        <div className="left">
                            <img src={require("./icon/hotPic5.png")} alt=""/>
                        </div>
                        <div className="right">
                            <img src={require("./icon/hotPic6.png")} alt=""/>
                            <img src={require("./icon/hotPic7.png")} alt=""/>
                            <img src={require("./icon/hotPic8.png")} alt=""/>
                        </div>
                    </div>
                    <div className="like">
                        <div className="title">
                            猜您喜欢
                        </div>
                        <div className="like-list">
                            <div className="item">
                                <div className="pic">
                                    <img src={require("./icon/pic1.png")} alt=""/>
                                </div>
                                <div className="caption">
                                    <div className="text">
                                        雪纺印花百褶裙半身裙,简约的线条和版型上身很好看，整体更有看点。
                                    </div>
                                    <div className="price">
                                        <i className="icon">￥</i>
                                        <span className="text">115</span>
                                    </div>
                                    <div className="info">
                                        <span>月销</span>
                                        <span>62</span>
                                        <span>笔</span>
                                        <span className="right">免邮费</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Pullup/>
                        <Nav navIndex={this.state.navIndex}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
