<script setup lang="ts">
  // import '@/styles/element.scss';
  import { RouterView } from 'vue-router';
  import Menu from '@/components/Menu.vue';
</script>

<template>
  <main>
    <div class="layout-wrap">
      <header class="layout-helmet" />
      <aside class="layout-menu">
        <div class="layout-menu-wrap">
          <Menu />
        </div>
      </aside>
      <div class="layout-content">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .layout-wrap {
    background-color: #fff;
  }

  .layout-helmet {
    height: 128px;
  }

  .layout-menu {
    position: fixed;
    top: 128px;
    left: calc((100vw - 1024px) / 2);
    width: 223px;
  }

  .layout-menu-wrap {
    position: relative;
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -1px;
      bottom: 0;
      width: 1px;
      background-color:
        hsla(160, 100%, 37%, .3);
      ;
      transform: scaleX(.5);
      transform-origin: 0 0;
    }
  }

  .layout-content {
    position: relative;
    left: calc((100vw - 1024px) / 2 + 224px);
    width: 800px;
    padding: 20px 30px 40px;
  }
</style>