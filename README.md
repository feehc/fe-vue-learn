# fe-vue-learn

<p align="center">
  <img alt="Vue 3" src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" width="300">
  </a>
</p>

Vue3学习项目，markdown文档部分由 `markdown-it` 和 `prismjs` 处理。

UI整体采用VSCode插件 `Markdown Preview Enhanced` 中Vue的预览风格，Demo演示中的组件均按需引入 `element-plus`的组件。

目前开发环境 `element-plus` 的按需引入每个组件在首次编译时，终端有大量警告输出，不影响网页展示，可以忽略。

## markdown解析核心代码

**插件形式注入全局$mdRender()方法：**  

```js
// /src/plugins/markdonwit/index.js文件
import markdownit from 'markdown-it'
import Prism from './prism.js'

export default {
  install: (app) => {
    const mdi = markdownit({
      highlight: function (str, lang) {
        if (lang && Prism.languages[lang]) {
          try {
            return Prism.highlight(str, Prism.languages[lang], lang)
          } catch (__) { }
        }

        return ''; // use external default escaping
      }
    })
    // 注入一个全局可用的 $mdRender() 方法
    // app.config.globalProperties.$mdRender = mdi.render

    app.provide('$mdRender', (content) => mdi.render(content))
  },
}
```

**自定义Marked组件：**  

```html
<!-- 文件目录：/src/components/Marked.vue -->
<script setup>
  import { defineProps, computed, inject } from 'vue';
  const mdRender = inject('$mdRender');

  const { id, content } = defineProps({
    id: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: true
    },
  }), markedHTML = computed(() => {
    try {
      return mdRender(content);
    } catch (error) {
      console.error(error);
    }
    return '';
  });
</script>

<template>
  <section :id="id" class="markdown-preview" v-html="markedHTML" />
</template>
```

**Marked组件使用：**

```html
<template>
  <Marked content="#传入markdown格式的字符串" />
</template>
```

## 项目设置

```bash
npm i
```

### 开发环境启动

```bash
npm run dev
```

### 编译

```bash
npm run build
```
