<script setup>
  import { reactive } from 'vue';
  const count = reactive({
    addtion: 1
  });
</script>

<template>
  <div class="content">
    <el-button type="primary" @click="count.addtion++">点我加 1 </el-button>
    <div>count.addtion: {{ count.addtion }}</div>
  </div>
</template>