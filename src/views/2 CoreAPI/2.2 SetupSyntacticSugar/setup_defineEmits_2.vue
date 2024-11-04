<!-- 子组件setup_defineEmits_2-->
<script setup>
  const emit = defineEmits(['say']);
  const sayHello = () => {
    emit('say', 'hello');
  };
</script>

<template>
  <el-button type="primary" @click="sayHello">点我 say hello</el-button>
</template>