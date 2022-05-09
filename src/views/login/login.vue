<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
