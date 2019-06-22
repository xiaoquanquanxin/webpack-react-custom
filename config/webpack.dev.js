const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
const webpackDevConfiguration = merge(webpackCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});
console.log('webpack.dev.js     //loading ........................................');
// console.log(webpackDevConfiguration);
module.exports = webpackDevConfiguration;