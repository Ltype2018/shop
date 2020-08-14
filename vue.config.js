const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/,
            threshold: 10240,
            deleteOriginalAssets: false
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
},
css:{
  loaderOptions:{
    postcss:{
      plugins:[
        require("postcss-px-to-viewport")({
          unitToConvert:"px",
          viewportWidth: 375,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw', 
          selectorBlackList: [], 
          minPixelValue: 1,
          mediaQuery: false,
          replace: true, 
          exclude: [/node_modules/] 
        })
      ]
    }
  }
}
}