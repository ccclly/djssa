const webpack = require('webpack')
const path = require('path');

module.exports = {

  transpileDependencies: true,
  productionSourceMap: false,
	publicPath: './',
  // publicPath: path.resolve(__dirname, './dist'),
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
