const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const path = require('path')

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // 1.配置方式一：CLI提供的属性
  outputDir: './build',
  // 开发环境下测试dict/build打包完成的服务
  // 上传到服务器不需要设置
  // publicPath: './',

  devServer: {
    // 解决跨域问题
    proxy: {
      // 配置需要跨域访问的服务器 通过sarve开启的express服务器去请求数据
      '^/api': {
        // 重新写请求的路由否则访问地址
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        secure: false,
        // 服务器做跨域校验，那么我们需要配置该api 使用 请求的服务器请求数据
        changeOrigin: true
      }
    }
  },

  // 2.配置方式二：和webpack属性完全一致，最后进行合并
  configureWebpack: {
    devServer: {
      // 刷新之后请求资源(找不到资源会默认找到根路径的inde.html)相当于后端配置nginx代理($uri 。。。。)
      historyApiFallback: true
    },
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }

  // 3.配置方式三：链式配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
})
