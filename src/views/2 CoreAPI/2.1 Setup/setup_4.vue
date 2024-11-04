<script setup>
  import { ref } from 'vue';
  import Son from './setup_4_son.vue';
  const isMount = ref(false);
</script>

<template>
  <div>点击下方按钮装载组件。</div>
  <el-button type="primary" @click="isMount = !isMount">点击我 装载/卸载 组件</el-button>
  <div v-if="isMount" class="son">
    <Son />
  </div>
</template>

<style scoped>

  button,
  .son {
    margin-top: 20px;
  }
</style>