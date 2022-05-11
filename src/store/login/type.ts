// import type { IUserInfo } from '@/service/login/type'

// 这里userInfo和userMenus类型都可以引用之前定义的类型
export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}
