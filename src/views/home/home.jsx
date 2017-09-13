/**
 * Created by songyingchun on 2017/9/3.
 */
import React, {Component} from "react";
import "./home.scss";
import Banner from "@/components/banner/banner.jsx";
import Pullup from "@/components/pullup/pullup.jsx";
import Search from "@/components/search/index.jsx";
import Config from "@/config/";
import ReactPullToRefresh from "react-pull-to-refresh";

const NavList =()=> (
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
);

const Purchase = ()=> (
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
);

const Free = ()=> (
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
);

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            navIndex: 0,
            load: false,
            data: {}
        };
    }
    componentDidMount() {
        this.fetch();
    }
    handleRefresh(resolve, reject) {
        console.log(11);
        if (this.load) {
            resolve();
        } else {
            reject();
        }
    }
    fetch () {
        fetch(Config.server.data.goodsData)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    data: data,
                    load: true
                });
            });
    }
    list () {
        const data = this.state.data;
        const list = [];
        if(data.length) {
            for(let i = 0; i < data.length; i++) {
                let item = data[i];
                console.log(item);
                list.push(
                    <div className="item" key={i}>
                        <div className="pic">
                            <img src={item.fImg} alt=""/>
                        </div>
                        <div className="caption">
                            <div className="text">
                                {item.fTitle}
                            </div>
                            <div className="price">
                                <i className="icon">￥</i>
                                <span className="text">{item.fPrice}</span>
                            </div>
                            <div className="info">
                                <span>月销</span>
                                <span>{item.fRecord}</span>
                                <span>笔</span>
                                <span className="right">{item.fPostage}</span>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        return list;
    }
    render () {
        const List = this.list();
        return (
            <div>
                <Search />
                <div className="panel-content">
                    <Banner/>
                    <NavList />
                    <Purchase />
                    <Free />
                    <div className="like">
                        <div className="title">
                            猜您喜欢
                        </div>
                        <div className="like-list">
                            <ReactPullToRefresh
                                onRefresh={this.handleRefresh}
                            >
                                <div>{List}</div>
                                <h3>Pull down to refresh</h3>
                                <div>etc.</div>
                            </ReactPullToRefresh>
                        </div>
                        <Pullup/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
