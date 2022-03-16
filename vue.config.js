const webpack = require('webpack')

module.exports = {

  transpileDependencies: true,
  // lintOnSave: false,
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  }
}