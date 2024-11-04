<script setup>
  import { ref } from 'vue';
  import CodeDemo from '@/components/CodeDemo.vue';
  import CM_defineProps from './setup_defineProps.vue';
  import MD_defineProps from './setup_defineProps.vue?raw';
  import CM_defineEmits from './setup_defineEmits_1.vue';
  import MD_defineEmits_1 from './setup_defineEmits_1.vue?raw';
  import MD_defineEmits_2 from './setup_defineEmits_2.vue?raw';
  const drawer = ref(false);
  const toMarkdown = (str) => `\`\`\`html\n${str}\n\`\`\``;
</script>

<template>
  <div class="demo-btn-wrap">
    <el-button type="primary" @click="drawer = true">
      点击查看演示Demo
    </el-button>
    <el-drawer v-model="drawer" title="setup语法糖演示" direction="ltr" size="1024" destroy-on-close>
      <CodeDemo title="setup defineProps宏" :code="toMarkdown(MD_defineProps)">
        <template #demo>
          <CM_defineProps name="肖申克的救赎" />
        </template>
      </CodeDemo>
      <CodeDemo title="setup defineEmits宏"
        :code="`${toMarkdown(MD_defineEmits_1) + '\n\n' + toMarkdown(MD_defineEmits_2)}`">
        <template #demo>
          <CM_defineEmits />
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