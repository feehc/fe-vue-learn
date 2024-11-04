<script setup>
  import useDebouncedRef from './useDebouncedRef';
  const content = useDebouncedRef('画江湖之不良人');
</script>

<template>
  <!-- elementUI中的input内部有做输入控制 -->
  <!-- 无法使用useDebouncedRef -->
  <!-- <el-input v-model="content" /> -->
  <input type="text" v-model="content">
  <div>
    content: {{ content }}
  </div>
</template>