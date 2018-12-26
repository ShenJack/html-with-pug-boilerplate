page =  require("./pages");


var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Object.keys(baseWebpackConfig.entry).forEach(function(name) {
//     baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

module.exports = merge(baseWebpackConfig,{
    plugins:[
        // For each page you want to be included in the final HTML files
        // Add a page per pug file

        ...page.getPages(false),
    ]
})