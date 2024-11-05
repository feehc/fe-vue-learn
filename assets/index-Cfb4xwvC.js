import{d as r,c as n,u as e,_ as t,o}from"./index-BQ9Zdwzy.js";const l=`## 8. Teleport\r
\r
将其插槽内容渲染到 \`DOM\` 中的另一个位置。\r
\r
#### Props\r
\r
\`\`\`ts\r
interface TeleportProps {\r
  /**\r
   * 必填项。指定目标容器。\r
   * 可以是选择器或实际元素。\r
   */\r
  to: string | HTMLElement\r
  /**\r
   * 当值为 \`true\` 时，内容将保留在其原始位置\r
   * 而不是移动到目标容器中。\r
   * 可以动态更改。\r
   */\r
  disabled?: boolean\r
  /**\r
   * 当值为 \`true\` 时，Teleport 将推迟\r
   * 直到应用的其他部分挂载后\r
   * 再解析其目标。(3.5+)\r
   */\r
  defer?: boolean\r
}\r
\`\`\`\r
\r
#### 示例\r
\r
指定目标容器：\r
\r
\`\`\`html\r
<Teleport to="#some-id" />\r
<Teleport to=".some-class" />\r
<Teleport to="[data-teleport]" />\r
\`\`\`\r
\r
有条件地禁用：\r
\r
\`\`\`html\r
<Teleport to="#popup" :disabled="displayVideoInline">\r
  <video src="./my-movie.mp4">\r
</Teleport>\r
\`\`\`\r
\r
延迟目标解析（3.5+） ：\r
\r
\`\`\`html\r
<Teleport defer to="#late-div">...</Teleport>\r
\r
<!-- 稍后出现于模板中的某处 -->\r
<div id="late-div"></div>\r
\`\`\`\r
`,p={MD_8:l},c=r({__name:"index",setup(s){return(a,d)=>(o(),n(t,{id:"md_8",content:e(p).MD_8},null,8,["content"]))}});export{c as default};
