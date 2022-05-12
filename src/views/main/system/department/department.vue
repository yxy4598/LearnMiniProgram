<template>
  <div class="department">
    <div class="search">
      <xy-form v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XyForm from '@/base-ui/form'
import { searchFormConfig } from './config/serch.config'

export default defineComponent({
  name: 'department',
  components: {
    XyForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
