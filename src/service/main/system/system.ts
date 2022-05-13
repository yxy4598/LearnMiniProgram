import xyRequest from '../../index'
import type { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return xyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
