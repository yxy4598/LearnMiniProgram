import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { XYRequestInterceptors, XYRequestConfig } from './type'

import { ElLoading } from 'element-plus'
// 因为element-plus更新频率很高，所以路径也有改变，可以试一下我下面的这个引用路径
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEAFULT_LOADING = true

class XYRequest {
  instance: AxiosInstance
  interceptors?: XYRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: XYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING

    // 使用拦截器
    // 从config中取出的拦截是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例请求成功的拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据......',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('所有实例请求失败的拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例响应成功的拦截')

        // 将loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 2000)

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败,错误信息~')
        } else {
          return data
        }

        return res.data
      },
      (err) => {
        console.log('所有实例响应成功的拦截')
        // 将loading移除
        this.loading?.close()

        // 例子: 判断你不同干的HttpErrorCode显示不同的错误信息
        // 一般用swich case来做
        if (err.response.status === 404) {
          console.log('404的错误~')
        }

        return err
      }
    )
  }

  request<T>(config: XYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求的config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)
          resolve(res)
          // 2.将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
        })
        .catch((err) => {
          // 2.将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: XYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: XYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: XYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: XYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default XYRequest
