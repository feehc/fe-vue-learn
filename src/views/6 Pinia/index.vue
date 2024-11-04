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
    const id = targetId ? `md_6_${targetId}` : 'md_6';
    const target = document.getElementById(id);
    if (target) {
      // target.scrollIntoView({ behavior: 'smooth' })
      window.scrollTo({ top: target.offsetTop - 20, left: 0, behavior: 'smooth' });
    }
  };
</script>

<template>
  <Marked id="md_6" :content="MD.MD_6" />
  <Marked id="md_6_1" :content="MD.MD_6_1" />
  <Marked id="md_6_2" :content="MD.MD_6_2" />
  <Marked id="md_6_3" :content="MD.MD_6_3" />
  <Marked id="md_6_4" :content="MD.MD_6_4" />
  <Marked id="md_6_5" :content="MD.MD_6_5" />
  <Marked id="md_6_6" :content="MD.MD_6_6" />
</template>