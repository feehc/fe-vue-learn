<!-- 父组件setup_defineEmits_1-->
<script setup>
  import { ref } from 'vue';
  import SetupDefineEmits2 from './setup_defineEmits_2.vue';
  const words = ref('');
  const handleSay = (value) => { words.value = value; };
</script>

<template>
  <SetupDefineEmits2 @say="handleSay" />
  <br />
  <div>
    say: {{ words }}
  </div>
</template>