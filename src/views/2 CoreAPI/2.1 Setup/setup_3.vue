<script>
  export default {
    name: 'setup 访问this',
    setup() {
      return ({ printThis: this });
    },
  };
</script>

<template>
  printThis: {{ `${printThis}` }}
</template>