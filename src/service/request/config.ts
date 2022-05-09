// 1.方式一：手动切换不同的环境(完全不推荐)
// const BASE_URL = 'https://httpbin.org/dev'
// const BASE_NAME = 'coderyxy'

// const BASE_URL = 'https://httpbin.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'https://httpbin.org/test'
// const BASE_NAME = 'james'

// 2.根据process.env.NODE_ENV
// development环境下：development
// production环境下：produciton
// test环境下：test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://httpbin.org/prod'
} else {
  BASE_URL = 'https://httpbin.org/test'
}

export { BASE_URL, TIME_OUT }
