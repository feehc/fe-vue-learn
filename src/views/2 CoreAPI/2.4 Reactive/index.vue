<script setup>
  import ReactiveReference from './reactive_reference.vue';
  import MDReactiveReference from './reactive_reference.vue?raw';
  const toMarkdown = (str) => `\`\`\`html\n${str}\n\`\`\``;
</script>

<template>
  <CodeDemo title="reactive演示Demo" :code="toMarkdown(MDReactiveReference)">
    <template #demo>
      <ReactiveReference />
    </template>
  </CodeDemo>
</template>