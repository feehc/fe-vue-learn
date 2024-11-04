import{d as p,f as a,Z as m,$ as y,j as d,K as o,u as c,_ as i,G as l,a0 as f,o as j}from"./index-DsJQc4Mb.js";const _="### 5.1 provide\r\n\r\n提供一个值，可以被后代组件注入。\r\n\r\n#### 5.1.1 类型\r\n\r\n```ts\r\nfunction provide<T>(key: InjectionKey<T> | String, value: T): void\r\n```\r\n\r\n#### 5.1.2 详细信息\r\n\r\n`provide()` 接受两个参数：第一个参数是要注入的 `key`，可以是一个字符串或者一个 `symbol`，第二个参数是要注入的值。\r\n\r\n当使用 `TypeScript` 时，key 可以是一个被类型断言为 `InjectionKey` 的 `symbol`。`InjectionKey` 是一个 `Vue` 提供的工具类型，继承自 Symbol，可以用来同步 `provide()` 和 `inject()` 之间值的类型。\r\n\r\n与注册生命周期钩子的 `API` 类似，`provide()` 必须在组件的 `setup()` 阶段同步调用。\r\n\r\n#### 5.1.3 示例\r\n\r\n```html\r\n<script setup>\r\nimport { ref, provide } from 'vue'\r\nimport { countSymbol } from './injectionSymbols'\r\n\r\n// 提供静态值\r\nprovide('path', '/project/')\r\n\r\n// 提供响应式的值\r\nconst count = ref(0)\r\nprovide('count', count)\r\n\r\n// 提供时将 Symbol 作为 key\r\nprovide(countSymbol, count)\r\n<\/script>\r\n```",v=`### 5.2 inject\r
\r
注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值。\r
\r
#### 5.2.1 类型\r
\r
\`\`\`ts\r
// 没有默认值\r
function inject<T>(key: InjectionKey<T> | String): T | undefined\r
\r
// 带有默认值\r
function inject<T>(key: InjectionKey<T> | String, defaultValue: T): T\r
\r
// 使用工厂函数\r
function inject<T>(\r
  key: InjectionKey<T> | String,\r
  defaultValue: () => T,\r
  treatDefaultAsFactory: true\r
): T\r
\`\`\`\r
\r
#### 5.2.2 详情\r
\r
第一个参数是注入的 \`key\`。\`Vue\` 会遍历父组件链，通过匹配 \`key\` 来确定所提供的值。如果父组件链上多个组件对同一个 \`key\` 提供了值，那么离得更近的组件将会“覆盖”链上更远的组件所提供的值。如果没有能通过 \`key\` 匹配到值，\`inject()\` 将返回 \`undefined\`，除非提供了一个默认值。\r
\r
第二个参数是可选的，即在没有匹配到 \`key\` 时使用的默认值。\r
\r
第二个参数也可以是一个工厂函数，用来返回某些创建起来比较复杂的值。在这种情况下，必须将 \`true\` 作为第三个参数传入，表明这个函数将作为工厂函数使用，而非值本身。\r
\r
与注册生命周期钩子的 \`API\` 类似，\`inject()\` 必须在组件的 \`setup()\` 阶段同步调用。\r
\r
当使用 \`TypeScript\` 时，\`key\` 可以是一个类型为 \`InjectionKey\` 的 \`symbol\`。\`InjectionKey\` 是一个 \`Vue\` 提供的工具类型，继承自 \`Symbol\`，可以用来同步 \`provide()\` 和 \`inject()\` 之间值的类型。\r
\r
#### 5.2.3 示例\r
\r
假设有一个父组件已经提供了一些值，如前面 \`provide()\` 的例子中所示：\r
\r
\`\`\`html\r
<script setup>\r
import { inject } from 'vue'\r
import { countSymbol } from './injectionSymbols'\r
\r
// 注入不含默认值的静态值\r
const path = inject('path')\r
\r
// 注入响应式的值\r
const count = inject('count')\r
\r
// 通过 Symbol 类型的 key 注入\r
const count2 = inject(countSymbol)\r
\r
// 注入一个值，若为空则使用提供的默认值\r
const bar = inject('path', '/default-path')\r
\r
// 注入一个值，若为空则使用提供的函数类型的默认值\r
const fn = inject('function', () => {})\r
\r
// 注入一个值，若为空则使用提供的工厂函数\r
const baz = inject('factory', () => new ExpensiveObject(), true)\r
<\/script>\r
\`\`\`\r
`,s={MD_5_1:_,MD_5_2:v},k=p({__name:"index",setup(T){const u=f();a(()=>{r(u.params.id)}),m(n=>{r(n.params.id)}),y(()=>window.scrollTo({top:0,left:0,behavior:"smooth"}));const r=n=>{const e=n?`md_5_${n}`:"md_5_1",t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-20,left:0,behavior:"smooth"})};return(n,e)=>(j(),d(l,null,[o(i,{id:"md_5_1",content:c(s).MD_5_1},null,8,["content"]),o(i,{id:"md_5_2",content:c(s).MD_5_2},null,8,["content"])],64))}});export{k as default};
