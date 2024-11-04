<script>
  import { ref } from 'vue';
  const content = ref('《八角笼中》');
  export default {
    name: 'setup返回对象',
    setup: () => ({ content })
  };
</script>

<template>
  <el-input type="text" v-model="content" />
  <div class="content">
    content: {{ content }}
  </div>
</template>

<style scoped>
  .content {
    margin-top: 20px;
    font-size: 14px;
  }
</style>