<script setup>
  import { ref } from 'vue';
  import CodeDemo from '@/components/CodeDemo.vue';
  import CM_2_1_1 from './setup_1.vue';
  import MD_2_1_1 from './setup_1.vue?raw';
  import CM_2_1_2 from './setup_2.vue';
  import MD_2_1_2 from './setup_2.vue?raw';
  import CM_2_1_3 from './setup_3.vue';
  import MD_2_1_3 from './setup_3.vue?raw';
  import CM_2_1_4 from './setup_4.vue';
  import MD_2_1_4 from './setup_4_son.vue?raw';
  const drawer = ref(false);
  const toMarkdown = (str) => `\`\`\`html\n${str}\n\`\`\``;
</script>

<template>
  <div class="demo-btn-wrap">
    <el-button type="primary" @click="drawer = true">
      点击查看演示Demo
    </el-button>
    <el-drawer v-model="drawer" title="setup特点演示" direction="ltr" size="1024" destroy-on-close>
      <CodeDemo title="setup返回对象" :code="toMarkdown(MD_2_1_1)">
        <template #demo>
          <CM_2_1_1 />
        </template>
      </CodeDemo>
      <CodeDemo title="setup返回函数" :code="toMarkdown(MD_2_1_2)">
        <template #demo>
          <CM_2_1_2 />
        </template>
      </CodeDemo>
      <CodeDemo title="setup中访问this" :code="toMarkdown(MD_2_1_3)">
        <template #demo>
          <CM_2_1_3 />
        </template>
      </CodeDemo>
      <CodeDemo title="setup调用时机" :code="toMarkdown(MD_2_1_4)">
        <template #demo>
          <CM_2_1_4 />
        </template>
      </CodeDemo>
    </el-drawer>
  </div>
</template>

<style>
  .demo-btn-wrap {
    padding: 12px;
  }
</style>