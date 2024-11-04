<script setup>
  defineProps({
    name: {
      type: String,
      required: true
    }
  });
</script>

<template>
  name：{{ name }}
</template>