import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface XYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XYRequestInterceptors<T>
  showLoading?: boolean
}
