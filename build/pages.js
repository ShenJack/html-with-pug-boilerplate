const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = [
        {
            template: "views/index.pug",
            target: "index.html",
        },
        {
            template: "views/contact.pug",
            target: "contact.html",
        },
        ]

module.exports = {

    getPages: (inject) => {
        let plugins = [];
        pages.forEach(
            page => {
                plugins.push(new HtmlWebpackPlugin({
                    filename: page.target,
                    template: page.template,
                    inject: inject,
                }))
            }
        )
        return plugins
    }
}