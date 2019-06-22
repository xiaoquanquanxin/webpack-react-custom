const merge = require('webpack-merge');
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackCommon = require('./webpack.common.js');
console.log('webpack.prod.js     //loading ........................................');
console.log('webpack.prod.js     //loading ........................................');
console.log('webpack.prod.js     //loading ........................................');
console.log('webpack.prod.js     //loading ........................................');
module.exports = merge(webpackCommon, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
});