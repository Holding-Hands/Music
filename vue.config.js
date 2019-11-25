const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com', //API服务器的地址
        bypass: function (req) {
          req.headers.referer = 'https://c.y.qq.com';
          req.headers.host = 'c.y.qq.com';
        },
        changeOrigin: true,//是否跨域，设置为true
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
