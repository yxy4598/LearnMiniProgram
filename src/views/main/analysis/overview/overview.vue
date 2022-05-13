<template>
  <div class="overview">
    <div class="search">
      <xy-form v-bind="searchFormConfig" :formData="formData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import XyForm from '@/base-ui/form'
import { searchFormConfig } from './config/serch.config'

export default defineComponent({
  name: 'overview',
  components: {
    XyForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return {
      formData,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
