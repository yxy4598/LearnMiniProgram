import { App } from 'vue'
import { ElButton } from 'element-plus'
import {
  Cellphone,
  UserFilled,
  Fold,
  Expand,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  ArrowDown,
  CircleClose,
  RefreshLeft,
  Search,
  Edit,
  Delete,
  Refresh,
  Plus
} from '@element-plus/icons-vue'
const components = [
  ElButton,
  Cellphone,
  UserFilled,
  Fold,
  Expand,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  ArrowDown,
  CircleClose,
  RefreshLeft,
  Search,
  Edit,
  Delete,
  Refresh,
  Plus
]

export default function registelElement(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
