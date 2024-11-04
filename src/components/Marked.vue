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

<style>
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/robotomono/v23/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW9.ttf) format('truetype')
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdr.ttf) format('truetype')
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7g.ttf) format('truetype')
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    src: url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdr.ttf) format('truetype')
  }

  * {
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: none;
    -webkit-touch-callout: none;
    box-sizing: border-box
  }

  div.markdown-preview:empty:before {
    content: 'Loading...'
  }

  img {
    max-width: 100%
  }

  a[disabled] {
    cursor: not-allowed;
    opacity: .6
  }

  kbd {
    color: #34495e;
    border: 1px solid #ccc;
    border-radius: 3px;
    display: inline-block;
    font-size: 12px !important;
    line-height: 12px;
    margin-bottom: 3px;
    padding: 3px 5px;
    vertical-align: middle
  }

  li input[type=checkbox] {
    margin: 0 .2em .25em -1.6em;
    vertical-align: middle
  }

  .markdown-preview>* {
    box-sizing: border-box;
    font-size: inherit
  }

  .markdown-preview>:first-child {
    margin-top: 0 !important
  }

  .markdown-preview hr {
    border: none;
    border-bottom: 1px solid #eee;
    margin: 2em 0
  }

  .markdown-preview table {
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    margin-bottom: 16px;
    margin-bottom: 1rem;
    overflow: auto;
    width: 100%
  }

  .markdown-preview th {
    font-weight: 700
  }

  .markdown-preview td,
  .markdown-preview th {
    border: 1px solid #ddd;
    padding: 6px 13px
  }

  .markdown-preview tr {
    border-top: 1px solid #ccc
  }

  .markdown-preview p code {
    white-space: nowrap;
    background-color: #f1f1f1;
    padding: .15em .5em;
    border-radius: 4px;
    color: #476582;
    transition: color .5s, background-color .5s;
  }

  .markdown-preview p.tip,
  .markdown-preview tr:nth-child(2n) {
    background-color: #f8f8f8
  }

  .markdown-preview p.tip {
    border-bottom-right-radius: 2px;
    border-left: 4px solid #f66;
    border-top-right-radius: 2px;
    margin: 2em 0;
    padding: 12px 24px 12px 30px;
    position: relative
  }

  .markdown-preview p.tip code {
    background-color: #efefef
  }

  .markdown-preview p.tip em {
    color: #34495e
  }

  .markdown-preview p.tip:before {
    background-color: #f66;
    border-radius: 100%;
    color: #fff;
    content: '!';
    font-family: Dosis, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    left: -12px;
    line-height: 20px;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    top: 14px
  }

  .markdown-preview p.warn {
    background: rgba(66, 185, 131, .1);
    border-radius: 2px;
    padding: 16px;
    padding: 1rem
  }

  .markdown-preview {
    margin-bottom: 20px;
    background-color: #fff
  }

  .markdown-preview h1,
  .markdown-preview h2,
  .markdown-preview h3,
  .markdown-preview h4,
  .markdown-preview strong {
    color: #2c3e50;
    font-weight: 600
  }

  .markdown-preview a {
    color: #42b983;
    color: var(--theme-color, #42b983);
    font-weight: 600
  }

  .md-sidebar-toc a {
    color: #42b983;
    font-weight: 600
  }

  .markdown-preview h1 {
    font-size: 32px;
    font-size: 2rem;
    margin: 0 0 16px;
    margin: 0 0 1rem
  }

  .markdown-preview h2 {
    font-size: 28px;
    font-size: 1.75rem;
    margin: 45px 0 12.8px;
    margin: 45px 0 .8rem
  }

  .markdown-preview h3 {
    font-size: 24px;
    font-size: 1.5rem;
    margin: 40px 0 9.6px;
    margin: 40px 0 .6rem
  }

  .markdown-preview h4 {
    font-size: 20px;
    font-size: 1.25rem
  }

  .markdown-preview h5,
  .markdown-preview h6 {
    font-size: 16px;
    font-size: 1rem
  }

  .markdown-preview h6 {
    color: #777
  }

  .markdown-preview figure,
  .markdown-preview p {
    margin: 1.2em 0
  }

  .markdown-preview ol,
  .markdown-preview p,
  .markdown-preview ul {
    line-height: 25.6px;
    line-height: 1.6rem;
    word-spacing: .8px;
    word-spacing: .05rem
  }

  .markdown-preview ol,
  .markdown-preview ul {
    padding-left: 24px;
    padding-left: 1.5rem
  }

  .markdown-preview blockquote {
    border-left: 4px solid #42b983;
    border-left: 4px solid var(--theme-color, #42b983);
    color: #858585;
    background-color: #f0f0f0;
    margin: 2em 0;
    padding-left: 20px
  }

  .markdown-preview blockquote p {
    font-weight: 600;
    margin-left: 0
  }

  .markdown-preview iframe {
    margin: 1em 0
  }

  .markdown-preview em {
    color: #7f8c8d
  }

  pre {
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    color: #eff;
    background-color: #2e3d44 !important;
    border: #475d69;
    border-radius: 3px
  }

  pre[class*=language-] {
    padding: 1em
  }

  code[class*=language-] .token.cdata,
  code[class*=language-] .token.comment,
  code[class*=language-] .token.doctype,
  code[class*=language-] .token.prolog,
  pre[class*=language-] .token.cdata,
  pre[class*=language-] .token.comment,
  pre[class*=language-] .token.doctype,
  pre[class*=language-] .token.prolog {
    color: #4f6875
  }

  code[class*=language-] .token.punctuation,
  pre[class*=language-] .token.punctuation {
    color: #82aaff
  }

  code[class*=language-] .namespace,
  pre[class*=language-] .namespace {
    opacity: .7
  }

  code[class*=language-] .token.constant,
  pre[class*=language-] .token.constant {
    color: #f07178
  }

  code[class*=language-] .token.property,
  pre[class*=language-] .token.property {
    color: #73d1c8
  }

  code[class*=language-] .token.boolean,
  code[class*=language-] .token.function-name,
  code[class*=language-] .token.number,
  pre[class*=language-] .token.boolean,
  pre[class*=language-] .token.function-name,
  pre[class*=language-] .token.number {
    color: #f78c6a
  }

  code[class*=language-] .token.tag,
  pre[class*=language-] .token.tag {
    color: #f07178
  }

  code[class*=language-] .token.deleted,
  pre[class*=language-] .token.deleted {
    color: #f07178
  }

  code[class*=language-] .token.symbol,
  pre[class*=language-] .token.symbol {
    color: #c3e88d
  }

  code[class*=language-] .token.selector,
  pre[class*=language-] .token.selector {
    color: #c792ea
  }

  code[class*=language-] .token.attr-name,
  pre[class*=language-] .token.attr-name {
    color: #c792ea
  }

  code[class*=language-] .token.string,
  pre[class*=language-] .token.string {
    color: #c3e88d
  }

  code[class*=language-] .token.char,
  pre[class*=language-] .token.char {
    color: #373b41
  }

  code[class*=language-] .token.built_in,
  code[class*=language-] .token.inserted,
  pre[class*=language-] .token.built_in,
  pre[class*=language-] .token.inserted {
    color: #c3e88d
  }

  code[class*=language-] .token.entity,
  pre[class*=language-] .token.entity {
    color: #89ddf3
  }

  code[class*=language-] .token.url,
  pre[class*=language-] .token.url {
    color: #ffcb6b
  }

  code[class*=language-] .token.operator,
  pre[class*=language-] .token.operator {
    color: #89ddf3
  }

  code[class*=language-] .token.atrule,
  code[class*=language-] .token.attr-value,
  code[class*=language-] .token.keyword,
  pre[class*=language-] .token.atrule,
  pre[class*=language-] .token.attr-value,
  pre[class*=language-] .token.keyword {
    color: #c792ea
  }

  code[class*=language-] .token.function,
  pre[class*=language-] .token.function {
    color: #82aaff
  }

  code[class*=language-] .token.class-name,
  pre[class*=language-] .token.class-name {
    color: #ffcb6b
  }

  code[class*=language-] .token.important,
  code[class*=language-] .token.regex,
  code[class*=language-] .token.variable,
  pre[class*=language-] .token.important,
  pre[class*=language-] .token.regex,
  pre[class*=language-] .token.variable {
    color: #89ddf3
  }

  code[class*=language-] .token.bold,
  code[class*=language-] .token.important,
  pre[class*=language-] .token.bold,
  pre[class*=language-] .token.important {
    font-weight: 700
  }

  code[class*=language-] .token.italic,
  pre[class*=language-] .token.italic {
    font-style: italic
  }

  code[class*=language-] .token.entity,
  pre[class*=language-] .token.entity {
    cursor: help
  }

  pre[data-line] {
    position: relative;
    padding: 1em 0 1em 3em
  }

  pre[data-line] .line-highlight-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    display: block;
    width: 100%
  }

  pre[data-line] .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: hsla(24, 20%, 50%, .08);
    background: linear-gradient(to right, hsla(24, 20%, 50%, .1) 70%, hsla(24, 20%, 50%, 0));
    pointer-events: none;
    line-height: inherit;
    white-space: pre
  }

  pre[data-line] .line-highlight:before,
  pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-start);
    position: absolute;
    top: .4em;
    left: .6em;
    min-width: 1em;
    padding: 0 .5em;
    background-color: hsla(24, 20%, 50%, .4);
    color: #f4f1ef;
    font: bold 65%/1.5 sans-serif;
    text-align: center;
    vertical-align: .3em;
    border-radius: 999px;
    text-shadow: none;
    box-shadow: 0 1px #fff
  }

  pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-end);
    top: auto;
    bottom: .4em
  }
</style>