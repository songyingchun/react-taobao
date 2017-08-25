/**
 * Created by songyingchun on 2017/8/25 0025.
 */
const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const env = process.env.NODE_ENV;

const PATH = {
    entry: "./src/main.js",
};

module.exports = {
    entry: PATH.entry,
    output: {
        path: path.resolve(__dirname, "dev"),
        filename: "[name].[hash:8].js",
    },
    devServer: {
        hot: true,
        inline: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                exclude: /node_modules/,
                include: /src/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    resolve: {
        extensions: [".vue", ".js", ".json", ".sass", ".scss", ".css", ".less", ".jsx"],
        alias: {
            "vue$": "vue/dist/vue.common.js",
            "@": path.resolve(__dirname, "src")
        }
    },
    devtool: "cheap-source-map",
    plugins: [
        new htmlWebpackPlugin({
            favicon: "favicon.ico",
            template: "index.html",
            filename: "index.html",
            inject: "body"
        }),
        new cleanWebpackPlugin([path.resolve(__dirname, "dev")]),
        new webpack.HotModuleReplacementPlugin()
    ]
};