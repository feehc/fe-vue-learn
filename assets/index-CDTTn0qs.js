import{d as n,c as r,u as e,_ as s,o as t}from"./index-BQ9Zdwzy.js";const o="## 9. Suspense\r\n\r\n用于协调对组件树中嵌套的异步依赖的处理。\r\n\r\n#### Props\r\n\r\n```ts\r\ninterface SuspenseProps {\r\n  timeout?: string | number\r\n  suspensible?: boolean\r\n}\r\n```\r\n\r\n#### 事件\r\n\r\n- `@resolve`\r\n- `@pending`\r\n- `@fallback`\r\n\r\n#### 详细信息\r\n\r\n`<Suspense>` 接受两个插槽：`#default` 和 `#fallback`。它将在内存中渲染默认插槽的同时展示后备插槽内容。\r\n\r\n如果在渲染时遇到异步依赖项 (异步组件和具有 `async setup()` 的组件)，它将等到所有异步依赖项解析完成时再显示默认插槽。\r\n\r\n通过将 `Suspense` 设置为 `suspensible`，所有的异步依赖将由父级 `Suspense` 处理。\r\n",a={MD_9:o},_=n({__name:"index",setup(c){return(p,u)=>(t(),r(s,{id:"md_9",content:e(a).MD_9},null,8,["content"]))}});export{_ as default};
