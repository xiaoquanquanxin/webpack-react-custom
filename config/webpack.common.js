const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//  error   handle
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");


console.log('webpack.common.js // loading  ...........................................');
console.log('webpack.common.js // loading  ...........................................');
console.log('webpack.common.js // loading  ...........................................');


let cssLoaders = [
    MiniCssExtractPlugin.loader,
    {
        loader: "css-loader",
        options: {
            importLoaders: 1
        }
    },
    {
        loader: "postcss-loader"
    }
];

module.exports = {
    entry: {
        "app": path.resolve(__dirname, '../src/web/index.tsx'),
    },
    output: {
        filename: '[name].[hash:8].bundle.js',
        path: path.resolve(__dirname, '../dist/web'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: [path.resolve("src")],
                exclude: /node_modules/,
                loader: "babel-loader"
                // loader:"awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                //include: [resolve("src")], //限制范围，提高打包速度
                // exclude: /node_modules/,
                use: cssLoaders
            },
        ]
    },
    resolve: {
        alias: {
            '@root': '.',
            "@components": path.resolve("src/web/components"),
            "@componentsLogin": path.resolve("src/web/components/login"),
            "@componentsContentPage": path.resolve("src/web/components/contentPage"),
            "@componentsUserBehavior": path.resolve("src/web/components/userBehavior"),
            "@componentsHeader": path.resolve("src/web/components/header"),
            "@componentsFooter": path.resolve("src/web/components/footer"),
            "@componentsLoginSuccess": path.resolve("src/web/components/loginSuccess"),
            "@componentsHomePage": path.resolve("src/web/components/home"),
            "@componentsNotfound": path.resolve("src/web/components/notfound"),
            "@routes": path.resolve("src/web/routes"),
            "@models": path.resolve("src/web/models"),
        },
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // new ExtractTextPlugin("main.css"),
        new HtmlWebpackPlugin({
            title: Math.random(),
            // filename: "index.html",
            template: path.resolve(__dirname, '../src/web/template.html'),
        }),
    ],
    externals: {
        react: "React",
        "react-router-dom": "ReactRouterDOM",
        mobx: "mobx"
        // "mobx-react-lite": "mobx-react-lite"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "../dist"),
        proxy: {
            "/api": "http://localhost:3000"
        },
        hot: true,
        quiet: true // necessary for FriendlyErrorsPlugin
    },
};