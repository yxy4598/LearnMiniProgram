<template>
  <div class="user">
    <div class="search">
      <el-form>
        <el-form-item label="用户名">
          <el-input />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
