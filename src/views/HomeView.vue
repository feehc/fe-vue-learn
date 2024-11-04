<script setup lang="ts">
  import Marked from '@/components/Marked.vue';
</script>

<template>
  <div class="home-page">
    <div class="home-page-helmet">
      <Marked content="# V3学习笔记" />
    </div>
    <img src="../assets/logo.svg" alt="vue">
    <div class="aphorism">
      <Marked :content="`**无人问津也好  \n技不如人也罢  \n你都要试着安静下来  \n去做自己该做的事  \n而不是让内心的烦躁、焦虑  \n毁掉你本就不多的热情和定力**`" />
    </div>
  </div>
</template>

<style scoped>
  .home-page {
    .home-page-helmet {
      display: flex;
      justify-content: center;
    }

    &>img {
      display: block;
      margin: 20px auto;
      width: 400px;
    }

    .aphorism {
      text-align: right;
    }
  }
</style>