import{d as i,f as p,Z as m,$ as d,j as S,K as r,u as n,_ as t,G as l,a0 as h,o as f}from"./index-BElz9EfL.js";const C=`## 6. Pinia\r
\r
**[官方文档](https://pinia.vuejs.org/zh/)**\r
\r
- 💡 所见即所得\r
与组件类似的 Store。其 API 的设计旨在让你编写出更易组织的 store。\r
- 🔑 类型安全\r
类型可自动推断，即使在 JavaScript 中亦可为你提供自动补全功能！\r
- ⚙️ 开发工具支持\r
不管是 Vue 2 还是 Vue 3，支持 Vue devtools 钩子的 Pinia 都能给你更好的开发体验。\r
- 🔌 可扩展\r
可通过事务、同步本地存储等方式扩展 Pinia，以响应 store 的变更以及 action。\r
- 🏗 模块化设计\r
可构建多个 Store 并允许你的打包工具自动拆分它们。\r
- 📦 极致轻量化\r
Pinia 大小只有 1kb 左右，你甚至可能忘记它的存在！\r
  `,b=`### 6.1 基本示例\r
\r
创建一个 Store ：\r
\r
\`\`\`js\r
// stores/counter.js\r
import { defineStore } from 'pinia'\r
\r
export const useCounterStore = defineStore('counter', {\r
  state: () => {\r
    return { count: 0 }\r
  },\r
  // 也可以定义为\r
  // state: () => ({ count: 0 })\r
  actions: {\r
    increment() {\r
      this.count++\r
    },\r
  },\r
})\r
\r
\`\`\`\r
\r
然后在一个组件中使用它：\r
\r
\`\`\`html\r
<script lang="ts" setup>\r
  import { useCounterStore } from '@/stores/counter';\r
  const counter = useCounterStore();\r
\r
  counter.count++;\r
  // 带自动补全\r
  counter.$patch({ count: counter.count + 1 });\r
  // 或使用 action 代替\r
  counter.increment();\r
<\/script>\r
\`\`\`\r
`,g="### 6.2 Option Store\r\n\r\n与 `Vue` 的选项式 `API` 类似，也可以传入一个带有 `state`、`actions` 与 `getters` 属性的 `Option `对象\r\n\r\n```js\r\nexport const useCounterStore = defineStore('counter', {\r\n  state: () => ({ count: 0, name: 'Eduardo' }),\r\n  getters: {\r\n    doubleCount: (state) => state.count * 2,\r\n  },\r\n  actions: {\r\n    increment() {\r\n      this.count++;\r\n    },\r\n  },\r\n})\r\n```\r\n\r\n可以认为 `state` 是 `store` 的数据 (`data`)，`getters` 是 `store` 的计算属性 (`computed`)，而 `actions` 则是方法 (`methods`)。\r\n\r\n为方便上手使用，Option Store 应尽可能直观简单。\r\n",_=`### 6.3 Setup Store\r
\r
也存在另一种定义 \`store\` 的可用语法。与 \`Vue\` 组合式 \`API\` 的 \`setup\` 函数 相似，可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。\r
\r
\`\`\`js\r
export const useCounterStore = defineStore('counter', () => {\r
  const count = ref(0);\r
  const doubleCount = computed(() => count.value * 2);\r
  function increment() {\r
    count.value++;\r
  }\r
\r
  return { count, doubleCount, increment };\r
})\r
\`\`\`\r
\r
在 \`Setup Store\` 中：\r
\r
- ref() 就是 state 属性\r
- computed() 就是 getters\r
- function() 就是 actions\r
\r
注意，要让 \`pinia\` 正确识别 \`state\`，必须在 \`Setup Store\` 中返回 \`state\` 的所有属性。这意味着，不能在 store 中使用私有属性。不完整返回会影响 SSR ，开发工具和其他插件的正常运行。\r
\r
\`Setup Store\` 比 \`Option Store\` 带来了更多的灵活性，因为可以在一个 \`store\` 内创建侦听器，并自由地使用任何组合式函数。不过，请记住，使用组合式函数会让 SSR 变得更加复杂。\r
\r
\`Setup Store\` 也可以依赖于全局提供的属性，比如路由。任何应用层面提供的属性都可以在 \`store\` 中使用 \`inject()\` 访问，就像在组件中一样：\r
\r
\`\`\`js\r
import { inject } from 'vue';\r
import { useRoute } from 'vue-router';\r
import { defineStore } from 'pinia';\r
\r
export const useSearchFilters = defineStore('search-filters', () => {\r
  const route = useRoute();\r
  // 这里假定 \`app.provide('appProvided', 'value')\` 已经调用过\r
  const appProvided = inject('appProvided');\r
\r
  // ...\r
\r
  return {\r
    // ...\r
  };\r
})\r
\`\`\`\r
`,j="### 6.4 State\r\n\r\n在大多数情况下，`state` 都是的 `store` 的核心。人们通常会先定义能代表他们 APP 的 `state`。在 Pinia `中，state` 被定义为一个返回初始状态的函数。这使得 `Pinia` 可以同时支持服务端和客户端。\r\n\r\n```js\r\nimport { defineStore } from 'pinia';\r\n\r\nconst useStore = defineStore('storeId', {\r\n  // 为了完整类型推理，推荐使用箭头函数\r\n  state: () => {\r\n    return {\r\n      // 所有这些属性都将自动推断出它们的类型\r\n      count: 0,\r\n      name: 'Eduardo',\r\n      isAdmin: true,\r\n      items: [],\r\n      hasChanged: true,\r\n    };\r\n  },\r\n})\r\n```\r\n\r\n如果不能使用组合式 `API`，但可以使用 `computed`，`methods`，...，那可以使用 `mapState()` 辅助函数将 `state` 属性映射为只读的计算属性：\r\n\r\n```js\r\nimport { mapState } from 'pinia'\r\nimport { useCounterStore } from '../stores/counter'\r\n\r\nexport default {\r\n  computed: {\r\n    // 可以访问组件中的 this.count\r\n    // 与从 store.count 中读取的数据相同\r\n    ...mapState(useCounterStore, ['count'])\r\n    // 与上述相同，但将其注册为 this.myOwnName\r\n    ...mapState(useCounterStore, {\r\n      myOwnName: 'count',\r\n      // 也可以写一个函数来获得对 store 的访问权\r\n      double: store => store.count * 2,\r\n      // 它可以访问 `this`，但它没有标注类型...\r\n      magicValue(store) {\r\n        return store.someGetter + this.count + this.double\r\n      },\r\n    }),\r\n  },\r\n}\r\n```\r\n\r\n#### 6.4.1 访问 state\r\n\r\n默认情况下，可以通过 `store` 实例访问 `state`，直接对其进行读写。\r\n\r\n```js\r\nconst store = useStore()\r\n\r\nstore.count++\r\n```\r\n\r\n注意，新的属性如果没有在 `state()` 中被定义，则不能被添加。它必须包含初始状态。例如：如果 `secondCount` 没有在 `state()` 中定义，无法执行 `store.secondCount = 2`。\r\n\r\n#### 6.4.2 重置 state\r\n\r\n使用选项式 `API` 时，可以通过调用 `store` 的 `$reset()` 方法将 `state` 重置为初始值。\r\n\r\n```js\r\nconst store = useStore()\r\n\r\nstore.$reset()\r\n```\r\n\r\n在 `$reset()` 内部，会调用 `state()` 函数来创建一个新的状态对象，并用它替换当前状态。\r\n\r\n在 `Setup Stores` 中，您需要创建自己的 `$reset()` 方法：\r\n\r\n```js\r\nexport const useCounterStore = defineStore('counter', () => {\r\n  const count = ref(0)\r\n\r\n  function $reset() {\r\n    count.value = 0\r\n  }\r\n\r\n  return { count, $reset }\r\n})\r\n```\r\n\r\n#### 6.4.3 可修改的 state\r\n\r\n如果想修改这些 `state` 属性 (例如，如果有一个表单)，可以使用 `mapWritableState()` 作为代替。但注意不能像 `mapState()` 那样传递一个函数：\r\n\r\n```js\r\nimport { mapWritableState } from 'pinia'\r\nimport { useCounterStore } from '../stores/counter'\r\n\r\nexport default {\r\n  computed: {\r\n    // 可以访问组件中的 this.count，并允许设置它。\r\n    // this.count++\r\n    // 与从 store.count 中读取的数据相同\r\n    ...mapWritableState(useCounterStore, ['count'])\r\n    // 与上述相同，但将其注册为 this.myOwnName\r\n    ...mapWritableState(useCounterStore, {\r\n      myOwnName: 'count',\r\n    }),\r\n  },\r\n}\r\n```\r\n\r\n#### 6.4.4 变更 state\r\n\r\n除了用 `store.count++` 直接改变 `store`，还可以调用 `$patch` 方法。它允许用一个 `state` 的补丁对象在同一时间更改多个属性：\r\n\r\n```js\r\nstore.$patch({\r\n  count: store.count + 1,\r\n  age: 120,\r\n  name: 'DIO',\r\n})\r\n```\r\n\r\n不过，用这种语法的话，有些变更真的很难实现或者很耗时：任何集合的修改（例如，向数组中添加、移除一个元素或是做 `splice` 操作）都需要创建一个新的集合。因此，`$patch` 方法也接受一个函数来组合这种难以用补丁对象实现的变更。\r\n\r\n\r\n```js\r\nstore.$patch((state) => {\r\n  state.items.push({ name: 'shoes', quantity: 1 })\r\n  state.hasChanged = true\r\n})\r\n```\r\n\r\n两种变更 `store` 方法的主要区别是，`$patch()` 允许将多个变更归入 `devtools` 的同一个条目中。同时请注意，直接修改 `state`，`$patch()` 也会出现在 devtools 中，而且可以进行 time travel (在 Vue 3 中还没有)。\r\n\r\n#### 6.4.5 替换 state\r\n\r\n不能完全替换掉 `store` 的 `state`，因为那样会破坏其响应性。但是，可以 `patch` 它。\r\n\r\n```js\r\n// 这实际上并没有替换`$state`\r\nstore.$state = { count: 24 }\r\n// 在它内部调用 `$patch()`：\r\nstore.$patch({ count: 24 })\r\n```\r\n\r\n也可以通过变更 `pinia` 实例的 `state` 来设置整个应用的初始 `state`。这常用于 `SSR` 中的激活过程。\r\n\r\n```js\r\npinia.state.value = {}\r\n```\r\n\r\n#### 6.4.6 订阅 state\r\n\r\n类似于 `Vuex` 的 `subscribe` 方法，可以通过 `store` 的 `$subscribe()` 方法侦听 `state` 及其变化。比起普通的 `watch()`，使用 `$subscribe()` 的好处是 `subscriptions` 在 `patch` 后只触发一次 (例如，当使用上面的函数版本时)。\r\n\r\n```js\r\ncartStore.$subscribe((mutation, state) => {\r\n  // import { MutationType } from 'pinia'\r\n  mutation.type // 'direct' | 'patch object' | 'patch function'\r\n  // 和 cartStore.$id 一样\r\n  mutation.storeId // 'cart'\r\n  // 只有 mutation.type === 'patch object'的情况下才可用\r\n  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。\r\n\r\n  // 每当状态发生变化时，将整个 state 持久化到本地存储。\r\n  localStorage.setItem('cart', JSON.stringify(state))\r\n})\r\n```\r\n\r\n默认情况下，`state subscription` 会被绑定到添加它们的组件上 (如果 `store` 在组件的 `setup()` 里面)。这意味着，当该组件被卸载时，它们将被自动删除。如果想在组件卸载后依旧保留它们，请将 `{ detached: true }` 作为第二个参数，以将 `state subscription` 从当前组件中分离：\r\n\r\n```html\r\n<script setup>\r\n  const someStore = useSomeStore()\r\n  // 此订阅器即便在组件卸载之后仍会被保留\r\n  someStore.$subscribe(callback, { detached: true })\r\n<\/script>\r\n```\r\n",$=`### 6.5 Getter\r
\r
Getter 完全等同于 store 的 state 的计算值。可以通过 defineStore() 中的 getters 属性来定义它们。推荐使用箭头函数，并且它将接收 state 作为第一个参数：\r
\r
\`\`\`js\r
export const useCounterStore = defineStore('counter', {\r
  state: () => ({\r
    count: 0,\r
  }),\r
  getters: {\r
    doubleCount: (state) => state.count * 2,\r
  },\r
})\r
\`\`\`\r
\r
大多数时候，getter 仅依赖 state。不过，有时它们也可能会使用其他 getter。因此，即使在使用常规函数定义 getter 时，我们也可以通过 this 访问到整个 store 实例，但(在 TypeScript 中)必须定义返回类型。这是为了避免 TypeScript 的已知缺陷，不过这不影响用箭头函数定义的 getter，也不会影响不使用 this 的 getter。\r
\r
\`\`\`js\r
export const useCounterStore = defineStore('counter', {\r
  state: () => ({\r
    count: 0,\r
  }),\r
  getters: {\r
    // 自动推断出返回类型是一个 number\r
    doubleCount(state) {\r
      return state.count * 2\r
    },\r
    // 返回类型**必须**明确设置\r
    doublePlusOne(): number {\r
      // 整个 store 的 自动补全和类型标注 ✨\r
      return this.doubleCount + 1\r
    },\r
  },\r
})\r
\`\`\`\r
\r
然后可以直接访问 store 实例上的 getter 了：\r
\r
\`\`\`html\r
<script setup>\r
  import { useCounterStore } from './counterStore'\r
\r
  const store = useCounterStore()\r
<\/script>\r
\r
<template>\r
  <p>Double count is {{ store.doubleCount }}</p>\r
</template>\r
\`\`\`\r
\r
#### 6.5.1 访问其他 getter\r
\r
与计算属性一样，也可以组合多个 getter。通过 this，可以访问到其他任何 getter。在这种情况下，需要为这个 getter 指定一个返回值的类型。\r
\r
\`\`\`ts\r
export const useCounterStore = defineStore('counter', {\r
  state: () => ({\r
    count: 0,\r
  }),\r
  getters: {\r
    doubleCount(state) {\r
      return state.count * 2\r
    },\r
    doubleCountPlusOne(): number {\r
      return this.doubleCount + 1\r
    },\r
  },\r
})\r
\`\`\`\r
\r
#### 6.5.2 向 getter 传递参数\r
\r
Getter 只是幕后的计算属性，所以不可以向它们传递任何参数。不过，可以从 getter 返回一个函数，该函数可以接受任意参数：\r
\r
\`\`\`js\r
export const useUserListStore = defineStore('userList', {\r
  getters: {\r
    getUserById: (state) => {\r
      return (userId) => state.users.find((user) => user.id === userId)\r
    },\r
  },\r
})\r
\`\`\`\r
\r
并在组件中使用：\r
\r
\`\`\`html\r
<script setup>\r
  import { useUserListStore } from './store'\r
  const userList = useUserListStore()\r
  const { getUserById } = storeToRefs(userList)\r
  // 请注意，需要使用 \`getUserById.value\` 来访问\r
  // <script setup> 中的函数\r
<\/script>\r
\r
<template>\r
  <p>User 2: {{ getUserById(2) }}</p>\r
</template>\r
\`\`\`\r
\r
请注意，当这样做时，getter 将不再被缓存。它们只是一个被调用的函数。不过，可以在 getter 本身中缓存一些结果，虽然这种做法并不常见，但有证明表明它的性能会更好：\r
\r
\`\`\`js\r
export const useUserListStore = defineStore('userList', {\r
  getters: {\r
    getActiveUserById(state) {\r
      const activeUsers = state.users.filter((user) => user.active)\r
      return (userId) => activeUsers.find((user) => user.id === userId)\r
    },\r
  },\r
})\r
\`\`\`\r
\r
#### 6.5.3 访问其他 store 的 getter\r
\r
想要使用另一个 store 的 getter 的话，那就直接在 getter 内使用就好：\r
\r
\`\`\`js\r
import { useOtherStore } from './other-store'\r
\r
export const useStore = defineStore('main', {\r
  state: () => ({\r
    // ...\r
  }),\r
  getters: {\r
    otherGetter(state) {\r
      const otherStore = useOtherStore()\r
      return state.localData + otherStore.data\r
    },\r
  },\r
})\r
\`\`\`\r
\r
#### 6.5.4 使用 setup语法糖时的用法\r
\r
作为 store 的一个属性，可以直接访问任何 getter(与 state 属性完全一样)：\r
\r
\`\`\`html\r
<script setup>\r
  const store = useCounterStore()\r
  store.count = 3\r
  store.doubleCount // 6\r
<\/script>\r
\`\`\`\r
\r
#### 6.5.5 使用选项式 API 的用法\r
\r
在下面的例子中，可以假设相关的 store 已经创建了：\r
\r
\`\`\`js\r
// 示例文件路径：\r
// ./src/stores/counter.js\r
\r
import { defineStore } from 'pinia'\r
\r
export const useCounterStore = defineStore('counter', {\r
  state: () => ({\r
    count: 0,\r
  }),\r
  getters: {\r
    doubleCount(state) {\r
      return state.count * 2\r
    },\r
  },\r
})\r
\`\`\`\r
\r
**使用 setup()**  \r
\r
虽然并不是每个开发者都会使用组合式 API，但 setup() 钩子依旧可以使 Pinia 在选项式 API 中更易用。并且不需要额外的映射辅助函数！\r
\r
\`\`\`html\r
<script>\r
import { useCounterStore } from '../stores/counter'\r
\r
export default defineComponent({\r
  setup() {\r
    const counterStore = useCounterStore()\r
\r
    return { counterStore }\r
  },\r
  computed: {\r
    quadrupleCounter() {\r
      return this.counterStore.doubleCount * 2\r
    },\r
  },\r
})\r
<\/script>\r
\`\`\`\r
\r
这在将组件从选项式 API 迁移到组合式 API 时很有用，但应该只是一个迁移步骤。始终尽量不要在同一组件中混合两种 API 样式。\r
\r
**不使用 setup()**  \r
\r
你可以使用前一节的 state 中的 mapState() 函数来将其映射为 getters：\r
\r
\`\`\`js\r
import { mapState } from 'pinia'\r
import { useCounterStore } from '../stores/counter'\r
\r
export default {\r
  computed: {\r
    // 允许在组件中访问 this.doubleCount\r
    // 与从 store.doubleCount 中读取的相同\r
    ...mapState(useCounterStore, ['doubleCount']),\r
    // 与上述相同，但将其注册为 this.myOwnName\r
    ...mapState(useCounterStore, {\r
      myOwnName: 'doubleCount',\r
      // 你也可以写一个函数来获得对 store 的访问权\r
      double: (store) => store.doubleCount,\r
    }),\r
  },\r
}\r
\`\`\`\r
`,P=`### 6.6 Action\r
\r
\`Action\` 相当于组件中的 \`method\`。它们可以通过 \`defineStore()\` 中的 \`actions\` 属性来定义，并且它们也是定义业务逻辑的完美选择。\r
\r
\`\`\`js\r
export const useCounterStore = defineStore('main', {\r
  state: () => ({\r
    count: 0,\r
  }),\r
  actions: {\r
    increment() {\r
      this.count++\r
    },\r
    randomizeCounter() {\r
      this.count = Math.round(100 * Math.random())\r
    },\r
  },\r
})\r
\`\`\`\r
\r
类似 \`getter\`，\`action\` 也可通过 \`this\` 访问整个 \`store\` 实例，并支持完整的类型标注(以及自动补全)。不同的是，\`action\` 可以是异步的，可以在它们里面 \`await\` 调用任何 \`API\`，以及其他 \`action\`！下面是一个使用 \`Mande\` 的例子。请注意，使用什么库并不重要，只要得到的是一个\`Promise\`。甚至可以 (在浏览器中) 使用原生 \`fetch\` 函数：\r
\r
\`\`\`js\r
import { mande } from 'mande'\r
\r
const api = mande('/api/users')\r
\r
export const useUsers = defineStore('users', {\r
  state: () => ({\r
    userData: null,\r
    // ...\r
  }),\r
\r
  actions: {\r
    async registerUser(login, password) {\r
      try {\r
        this.userData = await api.post({ login, password })\r
        showTooltip(\`Welcome back \${this.userData.name}!\`)\r
      } catch (error) {\r
        showTooltip(error)\r
        // 让表单组件显示错误\r
        return error\r
      }\r
    },\r
  },\r
})\r
\`\`\`\r
\r
也完全可以自由地设置任何想要的参数以及返回任何结果。当调用 \`action\` 时，一切类型也都是可以被自动推断出来的。\r
\r
\`Action\` 可以像函数或者通常意义上的方法一样被调用：\r
\r
\`\`\`html\r
<script setup>\r
  const store = useCounterStore()\r
  // 将 action 作为 store 的方法进行调用\r
  store.randomizeCounter()\r
<\/script>\r
<template>\r
  <!-- 即使在模板中也可以 -->\r
  <button @click="store.randomizeCounter()">Randomize</button>\r
</template>\r
\`\`\`\r
\r
#### 6.6.1 访问其他 store 的 action\r
\r
想要使用另一个 \`store\` 的话，直接在 \`action\` 中调用就好了：\r
\r
\`\`\`js\r
import { useAuthStore } from './auth-store'\r
\r
export const useSettingsStore = defineStore('settings', {\r
  state: () => ({\r
    preferences: null,\r
    // ...\r
  }),\r
  actions: {\r
    async fetchUserPreferences() {\r
      const auth = useAuthStore()\r
      if (auth.isAuthenticated) {\r
        this.preferences = await fetchPreferences()\r
      } else {\r
        throw new Error('User must be authenticated')\r
      }\r
    },\r
  },\r
})\r
\`\`\`\r
\r
#### 6.6.2 使用选项式 API 的用法\r
\r
在下面的例子中，可以假设相关的 \`store\` 已经创建了：\r
\r
\`\`\`js\r
// 示例文件路径：\r
// ./src/stores/counter.js\r
\r
import { defineStore } from 'pinia'\r
\r
export const useCounterStore = defineStore('counter', {\r
  state: () => ({\r
    count: 0,\r
  }),\r
  getters: {\r
    doubleCount(state) {\r
      return state.count * 2\r
    },\r
  },\r
})\r
\`\`\`\r
\r
**使用 setup()**  \r
\r
虽然并不是每个开发者都会使用组合式 \`API\`，但 \`setup()\` 钩子依旧可以使 \`Pinia\` 在选项式 \`API\` 中更易用。并且不需要额外的映射辅助函数!\r
\r
\`\`\`html\r
<script>\r
import { useCounterStore } from '../stores/counter'\r
export default defineComponent({\r
  setup() {\r
    const counterStore = useCounterStore()\r
    return { counterStore }\r
  },\r
  methods: {\r
    incrementAndPrint() {\r
      this.counterStore.increment()\r
      console.log('New Count:', this.counterStore.count)\r
    },\r
  },\r
})\r
<\/script>\r
\`\`\`\r
\r
**不使用 setup()**  \r
\r
如果不喜欢使用组合式 \`API\`，也可以使用 \`mapActions()\` 辅助函数将 \`action\` 属性映射为组件中的方法。\r
\r
\`\`\`js\r
import { mapActions } from 'pinia'\r
import { useCounterStore } from '../stores/counter'\r
\r
export default {\r
  methods: {\r
    // 访问组件内的 this.increment()\r
    // 与从 store.increment() 调用相同\r
    ...mapActions(useCounterStore, ['increment'])\r
    // 与上述相同，但将其注册为this.myOwnName()\r
    ...mapActions(useCounterStore, { myOwnName: 'increment' }),\r
  },\r
}\r
\`\`\`\r
\r
#### 6.6.3 订阅 action\r
\r
可以通过 \`store.$onAction()\` 来监听 \`action\` 和它们的结果。传递给它的回调函数会在 \`action\` 本身之前执行。\`after\` 表示在 \`promise\` 解决之后，允许在 \`action\` 解决后执行一个回调函数。同样地，\`onError\` 允许在 \`action\` 抛出错误或 \`reject\` 时执行一个回调函数。这些函数对于追踪运行时错误非常有用，类似于Vue docs 中的这个提示。\r
\r
这里有一个例子，在运行 \`action\` 之前以及 \`action resolve/reject\` 之后打印日志记录\r
\r
\`\`\`js\r
const unsubscribe = someStore.$onAction(\r
  ({\r
    name, // action 名称\r
    store, // store 实例，类似 \`someStore\`\r
    args, // 传递给 action 的参数数组\r
    after, // 在 action 返回或解决后的钩子\r
    onError, // action 抛出或拒绝的钩子\r
  }) => {\r
    // 为这个特定的 action 调用提供一个共享变量\r
    const startTime = Date.now()\r
    // 这将在执行 "store "的 action 之前触发。\r
    console.log(\`Start "\${name}" with params [\${args.join(', ')}].\`)\r
\r
    // 这将在 action 成功并完全运行后触发。\r
    // 它等待着任何返回的 promise\r
    after((result) => {\r
      console.log(\r
        \`Finished "\${name}" after \${\r
          Date.now() - startTime\r
        }ms.\\nResult: \${result}.\`\r
      )\r
    })\r
\r
    // 如果 action 抛出或返回一个拒绝的 promise，这将触发\r
    onError((error) => {\r
      console.warn(\r
        \`Failed "\${name}" after \${Date.now() - startTime}ms.\\nError: \${error}.\`\r
      )\r
    })\r
  }\r
)\r
\r
// 手动删除监听器\r
unsubscribe()\r
\`\`\`\r
\r
默认情况下，\`action\` 订阅器会被绑定到添加它们的组件上(如果 \`store\` 在组件的 \`setup()\` 内)。这意味着，当该组件被卸载时，它们将被自动删除。如果想在组件卸载后依旧保留它们，请将 \`true\` 作为第二个参数传递给 \`action\` 订阅器，以便将其从当前组件中分离：\r
\r
\`\`\`html\r
<script setup>\r
const someStore = useSomeStore()\r
// 此订阅器即便在组件卸载之后仍会被保留\r
someStore.$onAction(callback, true)\r
<\/script>\r
\`\`\`\r
`,e={MD_6:C,MD_6_1:b,MD_6_2:g,MD_6_3:_,MD_6_4:j,MD_6_5:$,MD_6_6:P},w=i({__name:"index",setup(A){const c=h();p(()=>{s(c.params.id)}),m(o=>{s(o.params.id)}),d(()=>window.scrollTo({top:0,left:0,behavior:"smooth"}));const s=o=>{const u=o?`md_6_${o}`:"md_6",a=document.getElementById(u);a&&window.scrollTo({top:a.offsetTop-20,left:0,behavior:"smooth"})};return(o,u)=>(f(),S(l,null,[r(t,{id:"md_6",content:n(e).MD_6},null,8,["content"]),r(t,{id:"md_6_1",content:n(e).MD_6_1},null,8,["content"]),r(t,{id:"md_6_2",content:n(e).MD_6_2},null,8,["content"]),r(t,{id:"md_6_3",content:n(e).MD_6_3},null,8,["content"]),r(t,{id:"md_6_4",content:n(e).MD_6_4},null,8,["content"]),r(t,{id:"md_6_5",content:n(e).MD_6_5},null,8,["content"]),r(t,{id:"md_6_6",content:n(e).MD_6_6},null,8,["content"])],64))}});export{w as default};
