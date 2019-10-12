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
    

#### parcel
* parcel 的作用：打包，运行 parcel 前， div#app 不认识 g-button ；运行 parcel 后， div#app 会去问 app.js，g-button 是什么；
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
然后运行（起了别名：usep）
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
* Button.log 按 Tab 键
```
console.log(Button)
```
* [使用 icon-font 挑选/修改图标](https://xiedaimala.com/tasks/feb587c8-7139-4b1e-95f3-ac429247747a/video_tutorials/88747efd-1306-4752-a8c0-e1b8e63f1862)
    * 左图标->右图标
    * 获取代码：symbol->在线链接
    * 让“加载”图标旋转：
* flex布局遇到同排元素不对齐
```
g.button{
    vertical-align: middle;
}
```
* BDD
Behavior Driven Development（行为驱动开发）
* TDD
Test Driven Development（测试驱动开发）
* assert（断言）
```
console.assert(1===2)
``` 
#### 自动化测试
* 自动化
    * 自动打包js(app.js)
    * 自动打开浏览器，输入网址回车，运行测试用例
    * 自动关闭浏览器，保留浏览器输出到命令行
* 运行 npm run test 前，要运行 rm -rf .cache dist       
    
    
#### vue 知识点
* 单文件组件的好处是集成 js,html,style 。让我们能一目了然地知道一个组件的样式，功能，内容。
* 用props为iconPosition设置默认值
```
props:{
    icon:{},
    iconPosition:{
        type:String,                validator(value){
                    return value=='left'||value!='right'
                }
        default:'left'
    }
}
```
* 属性检查器
```
validator(value){
    return value=='left'||value!='right'
}
```
* 每个Vue组件，都是一个可复用的vue实例。但根Vue实例只有一个
* 组件的class会最终加到组件的根元素上 
```
<g-icon class="icon">
</g-icon>
......
<template>
    <svg class="g-icon"></svg> 
</template>
```
最终渲染结果为
```
<svg class="g-icon icon"></svg>
```
* propsDate用在单元测试中
```
const button=new Constructor({
    propsData:{
        icon:'settings',
        loading:true
    }
})
```
等效于
```
<g-button icon="settings" :loading="true"></g-button>
```
* el:提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
提供的元素只能作为挂载点。所有的挂载元素会被 Vue 生成的 DOM 替换
```
g-button.$mount(div)
```
结果div会被g-button的根元素button替换
    * g-button.$el = <button><svg>...</svg></button>
    * g-button.$el常用在单元测试中，用于访问vue实例的样式，子节点等
#### 组件注册
* 记住全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生 


#### 
1. 工程知识：知道用法
    * webpack/parcel
    * scss
2. 语言特性：深入掌握
    * promise
    * vue
3. 抽象的东西：逐渐迭代   

#### 工具安装
[淘宝 NPM 镜像](https://npm.taobao.org/)，之后用 cnpm 代替 npm 即可
* 如果一个包是给用户（用这个组件的程序员）使用的
```
npm i vue
```
* 如果一个包是给开发者使用的（-D表示给 developer 使用）,比如 chai
```
npm i -D parcel-bundler
``` 

#### vue 生命周期
[测试](https://www.jianshu.com/p/b88572d8f80a)
![vue 生命周期图示](https://upload-images.jianshu.io/upload_images/11892234-64ee73fa10e1b20a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)
1. create:vue实例被创建；
    * beforeCreate：
    * created：
2. mount:vue实例被挂载到真实的DOM节点；
    * beforeMount：
    * mounted：
    * 每刷新一次页面，就重新 create 和 mount 一次
3. update:当vue实例里面的data数据变化时，触发组件的重新渲染
    * beforeUpdate：
    * updated：
4. destroy:vue实例被销毁
    * beforeDestroy：
    * destroyed：


