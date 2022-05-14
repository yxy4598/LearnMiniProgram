// 按需导入
import { App } from 'vue'
import registelElement from './register-element'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registelElement)
  app.use(registerProperties)
}
