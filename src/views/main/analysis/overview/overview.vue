<template>
  <div class="overview">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig"></page-search>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/serch.config'

export default defineComponent({
  name: 'overview',
  components: {
    PageSearch
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
