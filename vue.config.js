module.exports = {
  outputDir: './dist',

  // publicPath: process.env.NODE_ENV === 'production' ? '/production' : '/',
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({// 这里是配置项，详见官方文档
            rootValue: 16, // 换算的基数
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      },
      less: {
        modifyVars: {
          orange: '#ED742E',
          colorb: '#1B1D24',
          'text-color': '1B1D24'
        }
      }
    }
  },
  // 修改的配置
  devServer: {
    proxy: {
      '/auth-service': {
        changeOrigin: true,
        target: 'https://xxxx-test.pighub.com'
      }
    }
  },
  assetsDir: 'static',
  publicPath: process.env.BASE_URL
}
