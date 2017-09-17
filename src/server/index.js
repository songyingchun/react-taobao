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
        }
    };
}

module.exports = config;
