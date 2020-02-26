## zhq-vue-wheel - 一个用 vue 写的 UI 库
[![Build Status](https://www.travis-ci.org/Hanqing1996/vue-wheels.svg?branch=master)](https://www.travis-ci.org/Hanqing1996/vue-wheels)
## 介绍
用 vue 写的组件库，包含 Button,Cascader,Collapse,Grid 等常见 UI 组件。已通过单元测试和 travis CI。仅为学习实践作品，请勿用于生产环境。以后可能会用 react 写一个类似的。完成于2020年疫情期间，愿一切早日恢复往昔。

## 开始使用
1. 安装
```
npm install zhq-vue-wheel -D
```
or
```
yarn add zhq-vue-wheel -D
```
2. 使用
> 直接引入组件及样式即可
```
<template>
    <div id="app">
        <GButton></GButton>
    </div>
</template>
<script>
import {GButton} from 'zhq-vue-wheel' 
import zhq-vue-wheel/dist/myWheel.css

export default{
    components:{GButton}
    name:'app'
}
</script>
```

## 文档
[请戳这里](https://hanqing1996.github.io/vue-wheels/)

## 联系方式
zhq199622@163.com