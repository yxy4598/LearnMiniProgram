<template>
  <div class="page-search">
    <xy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="title">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" icon="RefreshLeft"> 重置 </el-button>
          <el-button icon="Search"> 搜索 </el-button>
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
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
