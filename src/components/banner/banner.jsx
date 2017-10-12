/**
 * Created by songyingchun on 2017/9/3.
 */
import React from "react";
import Swiper from "@/plugins/swiper/swiper";
import "./banner.scss";

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        this.initSwiper();
    }
    componentWillUnmount() {

    }
    initSwiper () {
        const swiper = new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            paginationClickable: true,
            loop: true,
        });
    }
    render () {
        return (
            <div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={require("./icon/carouselBox61.jpg")} alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./icon/carouselBox62.jpg")} alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./icon/carouselBox63.jpg")} alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default Banner;
