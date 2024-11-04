<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="menu">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/1">1. 创建工程</RouterLink>
    <RouterLink to="/2">2. 核心API</RouterLink>
    <nav class="sub-menu">
      <RouterLink to="/2/1">2.1 setup</RouterLink>
      <RouterLink to="/2/2">2.2 setup语法糖</RouterLink>
      <RouterLink to="/2/3">2.3 ref</RouterLink>
      <RouterLink to="/2/4">2.4 reactive</RouterLink>
      <RouterLink to="/2/5">2.5 ref对比reactive</RouterLink>
      <RouterLink to="/2/6">2.6 computed计算属性</RouterLink>
      <RouterLink to="/2/7">2.7 watch</RouterLink>
    </nav>
    <RouterLink to="/3">3. 进阶API</RouterLink>
    <nav class="sub-menu">
      <RouterLink to="/3/1">3.1 customRef</RouterLink>
      <RouterLink to="/3/2">3.2 toRaw</RouterLink>
      <RouterLink to="/3/3">3.3 markRaw</RouterLink>
    </nav>
    <RouterLink to="/4">4. 生命周期</RouterLink>
    <RouterLink to="/5">5. 依赖注入</RouterLink>
    <nav class="sub-menu">
      <RouterLink to="/5/1">5.1 provide</RouterLink>
      <RouterLink to="/5/2">5.2 inject</RouterLink>
    </nav>
    <RouterLink to="/6">6. Pinia</RouterLink>
    <nav class="sub-menu">
      <RouterLink to="/6/1">6.1 基本示例</RouterLink>
      <RouterLink to="/6/2">6.2 Option Store</RouterLink>
      <RouterLink to="/6/3">6.3 Setup Store</RouterLink>
      <RouterLink to="/6/4">6.4 State</RouterLink>
      <RouterLink to="/6/5">6.5 Getter</RouterLink>
      <RouterLink to="/6/6">6.6 Action</RouterLink>
    </nav>
    <RouterLink to="/7">7. slot</RouterLink>
    <RouterLink to="/8">8. Teleport</RouterLink>
    <RouterLink to="/9">9. Suspense</RouterLink>
  </nav>
</template>

<style scoped>
  .menu {
    display: flex;

    flex-direction: column;

    .router-link-active {
      background-color:
        hsla(160, 100%, 37%, .1);

      &:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
      }
    }

    .router-link-exact-active {
      background-color:
        hsla(160, 100%, 37%, .3);

      &:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
      }
    }

    .sub-menu {
      display: flex;
      flex-direction: column;
      padding-left: 12px;
    }
  }
</style>
