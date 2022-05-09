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
  publicPath: './',

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
