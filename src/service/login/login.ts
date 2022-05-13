import xyRequest from '../index'

import type { IAccount, ILoginResult, IUserInfo } from './type'
import type { IDataType } from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' //用法/role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return xyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return xyRequest.get<IDataType<IUserInfo>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return xyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
