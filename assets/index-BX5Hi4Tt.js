import{d as n,c as r,u as t,_ as e,o}from"./index-BQ9Zdwzy.js";const s=`## 7. slot\r
\r
表示模板中的插槽内容出口。\r
\r
#### Props\r
\r
\`\`\`ts\r
interface SlotProps {\r
  /**\r
   * 任何传递给 <slot> 的 prop 都可以作为作用域插槽\r
   * 的参数传递\r
   */\r
  [key: string]: any\r
  /**\r
   * 保留，用于指定插槽名。\r
   */\r
  name?: string\r
}\r
\`\`\`\r
\r
#### 详细信息\r
\r
\`<slot>\` 元素可以使用 \`name\` \`attribute\` 来指定插槽名。当没有指定 \`name\` 时，将会渲染默认插槽。传递给插槽元素的附加 \`attributes\` 将作为插槽 \`props\`，传递给父级中定义的作用域插槽。\r
\r
元素本身将被其所匹配的插槽内容替换。\r
\r
Vue 模板里的 \`<slot>\` 元素会被编译到 JavaScript，因此不要与原生 \`<slot>\` 元素进行混淆。\r
`,a={MD_7:s},l=n({__name:"index",setup(c){return(p,_)=>(o(),r(e,{id:"md_7",content:t(a).MD_7},null,8,["content"]))}});export{l as default};
