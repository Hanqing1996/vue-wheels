---
sidebarDepth: 2
---
# vue cli
## vue.config.js
> vue.config.js 是一个默认不存在的配置文件（可以手动创建，与 package.json 同级）。vue.config.js 中的配置将覆盖默认配置

## 默认配置
> build 和 serve 的默认入口文件为 src/main.js
```
entry: {
  app: [
    './src/main.js'
  ]
}
```

## build（构建/打包）
> 本项目采用 vue-cli 的 build 服务
1. [App 模式](https://cli.vuejs.org/guide/build-targets.html#app) 
> 默认打包 src/main.js
2. [Library 模式](https://cli.vuejs.org/guide/build-targets.html#library)
> lib 模式下最终得到的打包文件不会包含 vue