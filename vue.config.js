const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: './dist',

  // publicPath: process.env.NODE_ENV === 'production' ? '/production' : '/',
  lintOnSave: true,
  chainWebpack (config) {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      // .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()
  },
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
