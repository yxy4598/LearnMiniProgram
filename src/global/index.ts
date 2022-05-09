// 按需导入
import { App } from 'vue'
import { registelElement } from './register-element'

export function globalRegister(app: App): void {
  app.use(registelElement)
}
