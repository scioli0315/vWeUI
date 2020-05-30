# vWeUI

## 引入

一般在 webpack 入口页面 main.ts 中如下配置:

```javascript
// main.ts

import { createApp } from 'vue'
import App from './App.vue'
import vWeUI from 'v-we-ui'

import 'v-we-ui/src/lib/vWeUI.css'

const app = createApp(App)

app.use(vWeUI)

app.mount('#app')

```

## 按需引用

借助插件 ts-import-plugin 可以实现按需加载组件，减少文件体积:

```javascript
// vue.config.js

const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  // ...

  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'v-we-ui',
                libraryDirectory: path => `src/components/${path}/index.ts`
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  }

  // ...
}
```
