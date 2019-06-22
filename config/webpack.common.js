const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(path.resolve(__dirname, '../src/web/index.tsx'));
console.log('webpack.common.js // loading  ...........................................');
module.exports = {
    entry: {
        "app": path.resolve(__dirname, '../src/web/index.tsx'),
    },
    output: {
        filename: '[name].[hash:8].bundle.js',
        path: path.resolve(__dirname, '../dist/web'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: '/node_moduels/'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    plugins: [
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
            title: 'Production',
            template: path.resolve(__dirname, '../src/web/template.html'),
        }),
    ],
    alias: {
        '@root': '.',
        '@components': 'src/web/components',
        '@componntesHeader': 'src/web/components/header',
        '@componntesFooter': 'src/web/components/footer',

    }
};