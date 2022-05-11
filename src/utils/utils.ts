// 首字母大写函数
function titleCase(str: string) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}

export function iconApiRepair(iconApi: string) {
  const iconArr = iconApi.replace('el-icon', '').split('-').slice(1)
  const newIconArr = iconArr.map((item) => {
    if (item) {
      return titleCase(item)
    }
  })
  const icon = newIconArr.join('')
  return icon
}
