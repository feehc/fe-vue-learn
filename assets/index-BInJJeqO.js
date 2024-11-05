import{a1 as d,o as l,j as f,V as p,a2 as R,u as o,k as m,t as v,M as g,G as _,c as T,I as w,K as c,d as D,f as k,Z as x,$ as y,_ as u,a0 as b}from"./index-BQ9Zdwzy.js";import{_ as M}from"./CodeDemo-DVESjxSB.js";const h=`### 3.1 customRef\r
\r
创建一个自定义的 \`ref\`，显式声明对其依赖追踪和更新触发的控制方式。\r
\r
#### 3.1.1 类型\r
\r
\`\`\`ts\r
function customRef<T>(factory: CustomRefFactory<T>): Ref<T>\r
\r
type CustomRefFactory<T> = (\r
  track: () => void,\r
  trigger: () => void\r
) => {\r
  get: () => T\r
  set: (value: T) => void\r
}\r
\`\`\`\r
\r
#### 3.1.2 详细信息\r
\r
\`customRef()\` 预期接收一个工厂函数作为参数，这个工厂函数接受 \`track\` 和 \`trigger\` 两个函数作为参数，并返回一个带有 \`get\` 和 \`set\` 方法的对象。\r
\r
一般来说，\`track()\` 应该在 \`get()\` 方法中调用，而 \`trigger()\` 应该在 \`set()\` 中调用。然而事实上，对何时调用、是否应该调用他们有完全的控制权。\r
\r
#### 3.1.3 示例\r
\r
创建一个防抖 ref，即只在最近一次 set 调用后的一段固定间隔后再调用：\r
\r
\`\`\`ts\r
import { customRef } from 'vue';\r
\r
export default function useDebouncedRef(value:String, delay = 200) {\r
  let timeout:number;\r
  return customRef((track, trigger) => {\r
    return {\r
      get() {\r
        track();\r
        return value;\r
      },\r
      set(newValue) {\r
        clearTimeout(timeout);\r
        timeout = setTimeout(() => {\r
          value = newValue;\r
          trigger();\r
        }, delay);\r
      }\r
    }\r
  });\r
};\r
\`\`\``,B=`### 3.2 toRaw\r
\r
根据一个 Vue 创建的代理返回其原始对象。\r
\r
#### 3.2.1 类型\r
\r
\`\`\`ts\r
function toRaw<T>(proxy: T): T\r
\`\`\`\r
\r
#### 3.2.2 详情\r
\r
\`toRaw()\` 可以返回由 \`reactive()\`、\`readonly()\`、\`shallowReactive()\` 或者 \`shallowReadonly()\` 创建的代理对应的原始对象。\r
\r
这是一个可以用于临时读取而不引起代理访问/跟踪开销，或是写入而不触发更改的特殊方法。不建议保存对原始对象的持久引用，请谨慎使用。\r
\r
#### 3.2.3 示例\r
\r
\`\`\`js\r
const foo = {}\r
const reactiveFoo = reactive(foo)\r
\r
console.log(toRaw(reactiveFoo) === foo) // true\r
\`\`\`\r
`,V=`### 3.3 markRaw\r
\r
将一个对象标记为不可被转为代理。返回该对象本身。\r
\r
#### 3.3.1 类型\r
\r
\`\`\`ts\r
function markRaw<T extends object>(value: T): T\r
\`\`\`\r
\r
#### 3.3.2 示例\r
\r
\`\`\`js\r
const foo = markRaw({})\r
console.log(isReactive(reactive(foo))) // false\r
\r
// 也适用于嵌套在其他响应性对象\r
const bar = reactive({ foo })\r
console.log(isReactive(bar.foo)) // false\r
\`\`\`\r
`,i={MD_3_1:h,MD_3_2:B,MD_3_3:V};function $(s,e=200){let t;return d((n,r)=>({get(){return n(),s},set(a){clearTimeout(t),t=setTimeout(()=>{s=a,r()},e)}}))}const C={__name:"custom_ref",setup(s){const e=$("画江湖之不良人");return(t,n)=>(l(),f(_,null,[p(m("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=r=>v(e)?e.value=r:null)},null,512),[[R,o(e)]]),m("div",null," content: "+g(o(e)),1)],64))}},F=`<script setup>\r
  import useDebouncedRef from './useDebouncedRef';\r
  const content = useDebouncedRef('画江湖之不良人');\r
<\/script>\r
\r
<template>\r
  <!-- elementUI中的input内部有做输入控制 -->\r
  <!-- 无法使用useDebouncedRef -->\r
  <!-- <el-input v-model="content" /> -->\r
  <input type="text" v-model="content">\r
  <div>\r
    content: {{ content }}\r
  </div>\r
</template>`,j={__name:"index",setup(s){const e=t=>`\`\`\`html
${t}
\`\`\``;return(t,n)=>{const r=M;return l(),T(r,{title:"customRef演示Demo",code:e(o(F))},{demo:w(()=>[c(C)]),_:1},8,["code"])}}},I=D({__name:"index",setup(s){const e=b();k(()=>{t(e.params.id)}),x(n=>{t(n.params.id)}),y(()=>window.scrollTo({top:0,left:0,behavior:"smooth"}));const t=n=>{const r=n?`md_3_${n}`:"md_3_1",a=document.getElementById(r);a&&window.scrollTo({top:a.offsetTop-20,left:0,behavior:"smooth"})};return(n,r)=>(l(),f(_,null,[c(u,{id:"md_3_1",content:o(i).MD_3_1},null,8,["content"]),c(j),c(u,{id:"md_3_2",content:o(i).MD_3_2},null,8,["content"]),c(u,{id:"md_3_3",content:o(i).MD_3_3},null,8,["content"])],64))}});export{I as default};
