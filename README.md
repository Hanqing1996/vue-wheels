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

 
## 安装
使用本框架前，请在 css 中开启 border-box
```
*{box-sizing: border-box;}
```
    
#### 经验
* 字体不要设置固定 font-size ,应该用变量
* 应该在完成一个阶段后 commit ,而不是频繁 commit  
* 如果一个包是给用户使用的
```
npm i vue
```
* 如果一个包是给开发者使用的（-D表示给 developer 使用）
```
npm install -D parcel-bundler
``` 
* 用&表示当前的选择器
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


