<script>
  import { h } from 'vue';
  export default {
    name: 'setup 返回函数',
    setup: () => () => h('span', { innerText: '今天先吃肉' })
  };
</script>

<template>
  明天再吃饭
</template>