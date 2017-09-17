/**
 * Created by songyingchun on 2017/8/25 0025.
 */

import serverConfig from "../server/";

module.exports = {
    webpackConfig: {
        entry: "./src/app.js",
    },

    webpackConfigProduction: {

    },
    js: {
        path: "src/js",
        utils: "src/js/utils",
    },
    plugins: {
        path: "src/plugins",
        swiper: "src/plugins/swiper"
    },
    router: {
        path: "src/router",
        router: "src/router/router",
    },
    components: {
        path: "src/components",
        banner: "src/components/banner/banner.jsx",
    },
    config: {
        path: "src/config",
        flexible: "src/config/flexible",
        index: "src/config/home"
    },
    images: {
        path: "src/images"
    },
    store: {
        path: "src/store"
    },
    style: {
        path: "src/style",
        iconfont: "src/style/iconfont",
        common: "src/style/common",
        base: "src/style/base"
    },
    views: {
        path: "src/views",
        index: "src/views/home"
    },
    server: {
        path: "src/server",
        url: serverConfig
    }
};
