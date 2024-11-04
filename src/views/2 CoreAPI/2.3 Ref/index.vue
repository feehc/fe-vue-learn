<script setup>
  import RefBasicReference from './ref_basic_reference.vue';
  import MDRefBasicReference from './ref_basic_reference.vue?raw';
  const toMarkdown = (str) => `\`\`\`html\n${str}\n\`\`\``;
</script>

<template>
  <CodeDemo title="ref演示Demo" :code="toMarkdown(MDRefBasicReference)">
    <template #demo>
      <RefBasicReference />
    </template>
  </CodeDemo>
</template>