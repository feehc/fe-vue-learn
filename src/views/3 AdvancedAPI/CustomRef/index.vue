<script setup>
  import CustomRef from './custom_ref.vue';
  import MDCustomRef from './custom_ref.vue?raw';
  const toMarkdown = (str) => `\`\`\`html\n${str}\n\`\`\``;
</script>

<template>
  <CodeDemo title="customRef演示Demo" :code="toMarkdown(MDCustomRef)">
    <template #demo>
      <CustomRef />
    </template>
  </CodeDemo>
</template>