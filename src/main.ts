import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

// 新版element-plus不需要导入按需导入的文件，它在插件中已经帮我们注册了组件
// 当前版本已经过时
// 目前我是用他来动态导入 icon 组件
import { globalRegister } from './global'

// import './service/axios_demo'

// 全局导入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// Loading 还可以以服务的方式调用需要导入样式
// 目前并未有很好的办法来解决
import 'element-plus/theme-chalk/el-loading.css'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
// app.use(ElementPlus)
app.mount('#app')
