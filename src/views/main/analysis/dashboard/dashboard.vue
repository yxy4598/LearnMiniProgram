<template>
  <div class="dashboard">
    <div class="search">
      <el-form>
        <el-row>
          <el-col :span="8">
            <el-form-item label="用户名"> <el-input /> </el-form-item
          ></el-col>
          <el-col :span="8"
            ><el-form-item label="密码"> <el-input /> </el-form-item
          ></el-col>
          <el-col :span="8"
            ><el-form-item label="你喜欢的运动"> <el-input /> </el-form-item
          ></el-col>
          <el-col :span="8"
            ><el-form-item label="创建时间"> <el-input /> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'dashboard',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
