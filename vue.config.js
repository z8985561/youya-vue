module.exports = {
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