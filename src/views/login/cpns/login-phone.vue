<template>
  <div class="login-phone">
    <el-form label-width="65px" :rules="phoneRules" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verify_code">
        <div class="verify-code">
          <el-input v-model="phone.verify_code"></el-input>
          <el-button type="primary" class="get-code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRules } from '../config/account-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      verify_code: ''
    })

    return {
      phone,
      phoneRules
    }
  }
})
</script>

<style scoped>
.verify-code {
  display: flex;
}
.get-code {
  margin-left: 8px;
}
</style>
