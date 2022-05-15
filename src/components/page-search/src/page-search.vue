<template>
  <div class="page-search">
    <xy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="title">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="RefreshLeft" @click="handleResetClick">
            重置
          </el-button>
          <el-button type="primary" icon="Search" @click="handleQueryClick">
            搜索
          </el-button>
        </div>
      </template>
    </xy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import XyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    XyForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定的
    // 1.优化一：formData中的属性应该动态来决定
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    // 2.优化二：当用户点击了重置
    const handleResetClick = () => {
      // 2.1双向绑定值，重置更新方法
      // 改变form组件中传入page-search的formData时，form组件中浅拷贝的formData才会响应式改变
      // for (const key in formOriginData) {
      //   formData.value[key] = formOriginData[key]
      // }

      // 2.2直接将formOriginData赋值给formData，并且form组件中使用:modelValue = modelValue[field]绑定值，使用@updata:modelValue来更新值
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    // 3.优化三：当用户点击了搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
/* .title {
  color: red;
} */
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
