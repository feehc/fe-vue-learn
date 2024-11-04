<script setup lang="ts">
  import Marked from '@/components/Marked.vue';
  import MD_4 from './markdown/4.md?raw';
</script>

<template>
  <Marked :content="MD_4" />
</template>