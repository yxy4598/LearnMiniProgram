import { App } from 'vue'
import { ElButton } from 'element-plus'
import { Cellphone, UserFilled } from '@element-plus/icons-vue'
const components = [ElButton, Cellphone, UserFilled]

export function registelElement(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
