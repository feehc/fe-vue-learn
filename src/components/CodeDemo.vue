<script setup>
  import Marked from './Marked.vue';
  const { code } = defineProps({
    title: {
      type: String,
    },
    code: {
      type: String,
      required: true,
    }
  });
</script>

<template>
  <div class="code-demo">
    <div class="helmet">{{ title || '代码演示' }}：</div>
    <div class="body">
      <div class="code">
        <Marked :content="code" />
      </div>
      <div class="pane">
        <slot name="demo"></slot>
      </div>
    </div>
  </div>
</template>

<style>

  .code-demo {
    margin: 16px 0;
    background-color: #f9f9fb;

    .helmet {
      height: 46px;
      padding-left: 12px;
      line-height: 46px;
      font-size: 14px;
      color: #2c3e50;
      font-weight: bold;
      background: #eee;
    }

    .body {
      display: flex;
      border: 1px solid #f2f2fe;
      border-radius: 3px;
      border-top-color: transparent;

      .code,
      demo {
        width: 50%;
        min-width: 396px;
      }

      .code>section>pre {
        margin: 0 !important;
        border-radius: 0;
      }

      .pane {
        padding: 20px;
      }
    }
  }
</style>