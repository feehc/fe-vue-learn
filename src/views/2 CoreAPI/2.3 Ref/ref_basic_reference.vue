<script setup>
  import { ref } from 'vue';
  const content = ref('雾山五行');
  const count = ref({
    addtion: 1
  });
</script>

<template>
  <div class="content">
    <el-input type="text" v-model="content" />
    <div>content: {{ content }}</div>
  </div>
  <div class="content">
    <el-button type="primary" @click="count.addtion++">点我加 1 </el-button>
    <div>count.addtion: {{ count.addtion }}</div>
  </div>
</template>

<style scoped>
  .content {
    margin-bottom: 20px;
  }
</style>