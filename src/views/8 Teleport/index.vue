<script setup lang="ts">
  import Marked from '@/components/Marked.vue';
  import MD from './markdown/index';
</script>

<template>
  <Marked id="md_8" :content="MD.MD_8" />
</template>