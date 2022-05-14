import { Module } from 'vuex'
import type { ISystemState } from './type'
import type { IRootState } from '@/store/type'

import { getPageListData } from '@/service/main/system/system'

// const pageUrlMap = {
//   users: 'users/list'
// }

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUserCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      // let pageUrl = ''
      // -- 1.第一种配置url的方式直接使用字符串拼接
      const pageUrl = `${pageName}/list`

      // -- 2.第二种配置方式使用switch case
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }

      // -- 3.第三种方式 在外层定义映射
      // const pageUrl = pageUrlMap[pageName]

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 3.将我们的数据存储到state中
      const { list, totalCount } = pageResult.data

      const changePageName =
        (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)

      // switch (pageName) {
      //   case 'users':
      //     commit('changeUserList', list)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }
    }
  }
}

export default systemModule
