/**
 * Created by songyingchun on 2017/9/14.
 */
var online = false;
var test = false;
var local = true;
var config = {
    local: "http://localhost:8080/",
    test: "http://192.168.31.131",
    online: ""
};

if(local) {
    config = {
        home: {
            goodsData: "src/views/home/data/goodsData.json"
        },
        weitao: {
            menuData: "src/views/weitao/data/menuData.json",
            secondClassData: "src/views/weitao/data/secondClassData.json",
            thirdClassData: "src/views/weitao/data/thirdClassData.json",
        },
        discover: {
            goodsData: "src/views/discover/data/goodsData.json"
        },
        cart: {
            goodsData: "src/views/cart/data/goodsData.json"
        },
        detail: {
            goodsData: "src/views/detail/data/goodsData.json",
            commentsData: "src/views/detail/data/commentsData.json",
            imgData: "src/views/detail/data/imgData.json",
            shopData: "src/views/detail/data/shopData.json"
        }
    };
}

module.exports = config;
