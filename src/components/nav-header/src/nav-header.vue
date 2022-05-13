<template>
  <div class="nav-header">
    <i class="fold-menu" @click="handleFoldClick">
      <el-icon v-if="!isFold"><fold /></el-icon>
      <el-icon v-if="isFold"><expand /></el-icon>
    </i>
    <div class="content">
      <xy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './cpns/user-info.vue'
import XyBreadcrumb from '@/base-ui/breadcrumb'

import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    UserInfo,
    XyBreadcrumb
  },
  emits: ['foldChange'],
  setup(porps, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑数据
    const store = useStore()

    const route = useRoute()

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    height: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
