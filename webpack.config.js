/**
 * Created by songyingchun on 2017/8/25 0025.
 */
const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const env = process.env.NODE_ENV;

const PATH = {
    entry: "./src/app.jsx",
};

module.exports = {
    entry: {
        app: "./src/app.jsx"
    },
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
                test: /\.js$/,
                exclude: /(node_modules|plugins|common)/,
                include: /src/,
                enforce: "pre",
                use: [{
                    loader: "source-map-loader"
                },{
                    loader: "babel-loader"
                },{
                    loader: "eslint-loader"
                }]
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|plugins|common)/,
                include: /src/,
                enforce: "pre",
                use: [{
                    loader: "source-map-loader"
                },{
                    loader: "jsx-loader"
                },{
                    loader: "babel-loader"
                },{
                    loader: "eslint-loader"
                }]
            },
            {
                test: /\.(sass|scss|css)$/,
                exclude: /node_modules/,
                include: /src/,
                use: [{
                    loader: "style-loader",

                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        modules: false
                    }
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        data: "$env: " + process.env.NODE_ENV + ";"
                    }
                }]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                exclude: /node_modules/,
                include: /src/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        path: "../"
                    }
                }]
            },{
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                exclude: /node_modules/,
                include: /iconfont/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: "[name].[hash:8].[ext]"
                    }
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
    devtool: "cheap-module-inline-source-map",
    plugins: [
        new htmlWebpackPlugin({
            favicon: "favicon.ico",
            template: "index.html",
            filename: "index.html",
            inject: "body"
        }),
        new cleanWebpackPlugin([path.resolve(__dirname, "dev")]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            env: env
        })
    ]
};

