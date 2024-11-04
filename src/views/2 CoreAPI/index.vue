<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
  import Marked from '@/components/Marked.vue';
  import MD from './markdown/index';
  import Setup from './2.1 Setup/index.vue';
  import SetupSyntacticSugar from './2.2 SetupSyntacticSugar/index.vue';
  import Ref from './2.3 Ref/index.vue';
  import Reactive from './2.4 Reactive/index.vue';

  const route = useRoute();

  onMounted(() => {
    anchor(<String>route.params.id);
  });

  onBeforeRouteUpdate((updateGuard) => {
    anchor(<String>updateGuard.params.id);
  });

  onBeforeRouteLeave(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }));

  const anchor = (targetId: String) => {
    const id = targetId ? `md_2_${targetId}` : 'md_2';
    const target = document.getElementById(id);
    if (target) {
      // target.scrollIntoView({ behavior: 'smooth' })
      window.scrollTo({ top: target.offsetTop - 20, left: 0, behavior: 'smooth' });
    }
  };
</script>

<template>
  <Marked id="md_2" :content="MD.MD_2" />
  <Marked id="md_2_1" :content="MD.MD_2_1" />
  <Setup />
  <Marked id="md_2_2" :content="MD.MD_2_2" />
  <SetupSyntacticSugar />
  <Marked id="md_2_3" :content="MD.MD_2_3" />
  <Ref />
  <Marked id="md_2_4" :content="MD.MD_2_4" />
  <Reactive />
  <Marked id="md_2_5" :content="MD.MD_2_5" />
  <Marked id="md_2_6" :content="MD.MD_2_6" />
  <Marked id="md_2_7" :content="MD.MD_2_7" />
</template>