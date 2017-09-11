/**
 * Created by songyingchun on 2017/9/11.
 */
import React, {Component} from "react";
import "./index.scss";
class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    render () {
        return (
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
        );
    }
}

export default Search;
