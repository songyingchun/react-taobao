/**
 * Created by songyingchun on 2017/8/25 0025.
 */

module.exports = {
    webpackConfig: {
        entry: "./src/app.js",
    },

    webpackConfigProduction: {

    },

    js: {
        path: "@/js",
        utils: "@/js/utils",
    },
    plugins: {
        path: "@/plugins",
        swiper: "@/plugins/swiper"
    },
    router: {
        path: "@/router",
        router: "@/router/router",
    },
    components: {
        path: "@/components",
        banner: "@/components/banner/banner.jsx",
    },
    config: {
        path: "@/config",
        flexible: "@/config/flexible",
        index: "@/config/home"
    },
    images: {
        path: "@/images"
    },
    store: {
        path: "@/store"
    },
    style: {
        path: "@/style",
        iconfont: "@/style/iconfont",
        common: "@/style/common",
        base: "@/style/base"
    },
    views: {
        path: "@/views",
        index: "@/views/home"
    }
};
