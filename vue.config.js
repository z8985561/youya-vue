module.exports = {
  publicPath: '/youya-h5/',
  devServer: {
    proxy: {
        '/': {
        target: 'http://youya.chuncom.com/',
        ws: false,
        changeOrigin: true,
        pathRewrite:{
          '^/':''
        }
      }
    }
  }
}