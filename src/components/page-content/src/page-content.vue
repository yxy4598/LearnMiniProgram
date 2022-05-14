<template>
  <div class="page-content">
    <xy-table :listData="dataList" v-bind="contentTableConfig" @select="select">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button icon="Plus" type="primary" size="medium">新建用户</el-button>
        <el-button icon="Refresh" size="medium">刷新列表</el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button icon="Edit" size="small" type="text">编辑</el-button>
          <el-button icon="Delete" size="small" type="text">删除</el-button>
        </div>
      </template>
    </xy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import XyTable from '@/base-ui/table'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    XyTable
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    const select = (value: any) => {
      console.log(value)
    }

    return {
      dataList,
      select
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
