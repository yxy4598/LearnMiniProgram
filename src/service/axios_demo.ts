import axios from 'axios'

// axios的实例对象
// 1.模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

// // 2.get请求带参数
// axios
//   .get('https://httpbin.org/get', {
//     params: {
//       name: 'coderyxy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// // 3.post请求
// axios
//   .post('https://httpbin.org/post', {
//     data: {
//       name: 'coderyxy'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// Promise本身是可以有类型
// new Promise<string>((resolve) => {
//   resolve('123')
// }).then((res) => {
//   console.log(res)
// })

// 4.axios的配置选项
// 相当于是axios的全局配置
axios.defaults.baseURL = 'https://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// axios
//   .get('/get', {
//     params: {
//       name: 'coderyxy',
//       age: 18
//     },
//     // 局部的配置
//     timeout: 5000
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .post('/post', {
//     data: {
//       name: 'coderyxy'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 5.axios.all -> 多个请求，一起返回
// axios
//   .all([
//     axios.get('/get', { params: { name: 'coderyxy' } }),
//     axios.post('/post', { data: { name: 'yxy' } })
//   ])
//   .then((res) => {
//     console.log(res[0])
//     console.log(res[1])
//   })

// 6.axios的拦截器
// fn1: 请求发送成功后执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1.给请求添加token
    // 2.isLoading动画
    console.log('请求成功拦截')
    return config
  },
  (err) => {
    console.log('请求发送失败')
    return err
  }
)
axios.interceptors.response.use(
  (config) => {
    console.log('响应成功的拦截')
    return config.data
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)

axios
  .all([
    axios.get('/get', { params: { name: 'coderyxy' } }),
    axios.post('/post', { data: { name: 'yxy' } })
  ])
  .then((res) => {
    console.log(res[0])
    console.log(res[1])
  })
