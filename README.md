# 我造的轮子们

## 流程 
1. 需求分析/UI设计
2. [LICENSE选择](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)
    * 最开放：MIT
3. 选择第三方工具
    * npm
4. 选择底层代码
    * vue    
5. [选择不要上传的文件（.idea,node_modules等等，第一次就不要push）](https://github.com/Hanqing1996/blog/blob/master/github%E7%9B%B8%E5%85%B3/README.md)    
6. 选择构建工具 
    * webpack
    * parcel
7.     

#### parcel
* parcel 的作用：运行 parcel 前， app 不认识 g-button ；运行 parcel 后， app 会去问 app.js，g-button 是什么；
    ```
  <div id="app">
      <g-button></g-button>
  </div>
  
  <script src="./src/app.js"></script>
    ```
* ./node_modules/.bin/parcel index.html 要在vue-wheels目录下运行
* [运行 parcel 时，出现 No entries found 报错怎么办？](https://blog.csdn.net/weixin_42971942/article/details/88345351)
* [[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. ]()
根据[ vue 文档](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)描述，需在 package.json 中添加如下内容
```
  "alias": {
    // 只包含运行时版->完整版
    "vue" : "./node_modules/vue/dist/vue.common.js"
  }
```
然后运行
```
./node_modules/.bin/parcel index.html --no-cache
```
* npx parcel index.html
等价于
```
./node_modules/.bin/parcel index.html
```
 * parcel 会在代码更新时自动重新编译
 
## 安装
使用本框架前，请在 css 中开启 border-box
```
*{box-sizing: border-box;}
```
    
#### 经验
* css 兼容查询：www.canIuse.com
* 字体不要设置固定 font-size ,应该用变量
* 应该在完成一个阶段后 commit ,而不是频繁 commit  
* 如果一个包是给用户（用这个组件的程序员）使用的
```
npm i vue
```
* 如果一个包是给开发者使用的（-D表示给 developer 使用）
```
npm install -D parcel-bundler
``` 
* 用&表示当前的选择器（scss）
```
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
    }
    &:hover {
        border-color: var(--border-color-hover);
    }
```
* Button.log 按 Tab 键
```
console.log(Button)
```
* [使用 icon-font 挑选/修改图标](https://xiedaimala.com/tasks/feb587c8-7139-4b1e-95f3-ac429247747a/video_tutorials/88747efd-1306-4752-a8c0-e1b8e63f1862)
    * 左图标->右图标
    * 获取代码：symbol->在线链接
* 遇到同排元素不对齐
```
g.button{
    vertical-align: middle;
}
```

    
#### vue 知识点
* 单文件组件的好处是集成 js,html,style 。让我们能一目了然地知道一个组件的样式，功能，内容。
* 用props为iconPosition设置默认值
```
props:{
    icon:{},
    iconPosition:{
        type:String,
        default:'left'
    }
}
```

#### 
1. 工程知识：知道用法
    * webpack/parcel
    * scss
2. 语言特性：深入掌握
    * promise
    * vue
3. 抽象的东西：逐渐迭代   
      



