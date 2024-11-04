<script>
  export default {
    name: 'setup调用时机',
    setup() {
      console.log('setup');
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
  };
</script>

<template>
  组件已装载，请打开控制台查看输出顺序
</template>