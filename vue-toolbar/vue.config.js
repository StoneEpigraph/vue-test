const path = require('path')

module.exports = {
  configWebpack: config => {
    Object.assign(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components')
        }
      }
    })
  }

}
