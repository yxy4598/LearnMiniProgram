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
          <el-button type="primary" icon="Search"> 搜索 </el-button>
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
  setup(props) {
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
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
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
