<script setup lang="ts">
  import Marked from '@/components/Marked.vue'
  import MD_1 from './markdown/1.md?raw';
</script>

<template>
  <Marked :content="MD_1" />
</template>