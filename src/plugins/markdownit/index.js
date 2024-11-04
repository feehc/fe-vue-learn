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