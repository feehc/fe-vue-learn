<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
  import Marked from '@/components/Marked.vue';
  import MD from './markdown/index';

  const route = useRoute();

  onMounted(() => {
    anchor(<String>route.params.id);
  });

  onBeforeRouteUpdate((updateGuard) => {
    anchor(<String>updateGuard.params.id);
  });

  onBeforeRouteLeave(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }));

  const anchor = (targetId: String) => {
    const id = targetId ? `md_5_${targetId}` : 'md_5_1';
    const target = document.getElementById(id);
    if (target) {
      // target.scrollIntoView({ behavior: 'smooth' })
      window.scrollTo({ top: target.offsetTop - 20, left: 0, behavior: 'smooth' });
    }
  };
</script>

<template>
  <Marked id="md_5_1" :content="MD.MD_5_1" />
  <!-- <Setup /> -->
  <Marked id="md_5_2" :content="MD.MD_5_2" />
  <!-- <SetupSyntacticSugar /> -->
</template>