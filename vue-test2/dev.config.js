const WebpackMerge = require('webpack-merge')
const BaseConfig = require('./base.config')

module.exports = WebpackMerge.merge(BaseConfig, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
})
