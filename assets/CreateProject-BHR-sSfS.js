import{i as s,c as a,o,a as d,d as i,b as c,u}from"./index-DnNbA0GN.js";const p=["innerHTML"],l={__name:"Marked",props:{content:{type:String,required:!0}},setup(n){const r=s("$mdRender"),e=a(()=>{try{return r(n.content)}catch(t){console.error(t)}return""});return(t,f)=>(o(),d("div",{class:"markdown-preview",innerHTML:e.value},null,8,p))}},m=`## 1. 创建Vue3工程\r
\r
**[基于vite创建](https://vitejs.cn/)**\r
\r
- 💡 极速的服务启动\r
使用原生 ESM 文件，无需打包!\r
- ⚡️ 轻量快速的热重载\r
无论应用程序大小如何，都始终极快的模块热重载（HMR）\r
- 🛠️ 丰富的功能\r
对 TypeScript、JSX、CSS 等支持开箱即用\r
- 📦 优化的构建\r
可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建\r
- 🔩 通用的插件\r
在开发和构建之间共享 Rollup-superset 插件接口\r
- 🔑 完全类型化的API\r
灵活的 API 和完整 TypeScript 类型\r
\r
**前提条件：**\r
\r
- 熟悉命令行\r
- 已安装 18.3 或更高版本的 Node.js\r
\r
**创建指令及过程：**  \r
\r
\`\`\`bash\r
npm create vue@latest\r
\`\`\`\r
\r
\`\`\`text\r
✔ Project name: … <your-project-name>\r
✔ Add TypeScript? … No / Yes\r
✔ Add JSX Support? … No / Yes\r
✔ Add Vue Router for Single Page Application development? … No / Yes\r
✔ Add Pinia for state management? … No / Yes\r
✔ Add Vitest for Unit testing? … No / Yes\r
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright\r
✔ Add ESLint for code quality? … No / Yes\r
✔ Add Prettier for code formatting? … No / Yes\r
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes\r
\r
Scaffolding project in ./<your-project-name>...\r
Done.\r
\`\`\`\r
\r
\`\`\`bash\r
cd <your-project-name>\r
npm install\r
npm run dev\r
\`\`\`\r
\r
\`\`\`js\r
const [modelValue, modelModifiers] = defineModel({\r
  // get() 省略了，因为这里不需要它\r
  set(value) {\r
    // 如果使用了 .trim 修饰符，则返回裁剪过后的值\r
    if (modelModifiers.trim) {\r
      return value.trim()\r
    }\r
    // 否则，原样返回\r
    return value\r
  }\r
})\r
\`\`\`\r
`,g=i({__name:"CreateProject",setup(n){return(r,e)=>(o(),c(l,{content:u(m)},null,8,["content"]))}});export{g as default};
