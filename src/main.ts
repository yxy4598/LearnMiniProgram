import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

// 新版element-plus不需要导入按需导入的文件，它在插件中已经帮我们注册了组件
// 当前版本已经过时
// 目前我是用他来动态导入 icon 组件
import { globalRegister } from './global'

// import './service/axios_demo'
import XYRequest from './service'

// 全局导入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// Loading 还可以以服务的方式调用需要导入样式
// 目前并未有很好的办法来解决
import 'element-plus/theme-chalk/el-loading.css'

import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(globalRegister)
// app.use(ElementPlus)
app.mount('#app')

// 打印.env.development文件中定义的常量
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// XYRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   intercepotors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的res')
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

// XYRequest.request<DataType>({
//   url: '/home/multidata',
//   method: 'GET',
//   showLoading: false
// }).then((res) => {
//   console.log(res.data)
//   console.log(res.returnCode)
//   console.log(res.success)
// })

XYRequest.get<DataType>({
  url: '/home/multidata',
  showLoading: false
}).then((res) => {
  // 为了不打印
  return res
  // console.log(res)
  // console.log(res.data)
  // console.log(res.returnCode)
  // console.log(res.success)
})

console.log('当前标签是v0.0.2')
console.log('当前标签是v0.0.3')
