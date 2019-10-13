# 我造的轮子们

#### 分类
1. 工程知识：知道用法
    * webpack/parcel
    * scss
2. 语言特性：深入掌握
    * promise
    * vue
3. 抽象的东西：逐渐迭代 

#### 工程知识
* [LICENSE选择](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)
    * 最开放：MIT
* [选择不要上传的文件（第一次就不要push）](https://github.com/Hanqing1996/blog/blob/master/github%E7%9B%B8%E5%85%B3/README.md)  
    * .idea
    * node_modules
    * .cache
* 没有全局部安装的包，如何执行命令
```
npx ......
```
* [使用 icon-font 挑选/修改图标](https://xiedaimala.com/tasks/feb587c8-7139-4b1e-95f3-ac429247747a/video_tutorials/88747efd-1306-4752-a8c0-e1b8e63f1862)
    * 左图标->右图标
    * 获取代码：symbol->在线链接
* BDD
Behavior Driven Development（行为驱动开发）
* TDD
Test Driven Development（测试驱动开发）
* assert（断言）
```
console.assert(1===2)
``` 
* 打包：parcel build test/* --no-cache --no-minify
    * 把 test 目录下的文件打包到 dist 目录下

#### [parcel](https://parceljs.org/)
非全局安装（报错：未找到命令）注意加 npx
* parcel的作用是打包
    * parcel的服务对象是浏览器
    * 之所以要打包，是因为浏览器不认识 Vue,import等语法，打包其实是把原先的文件解析成浏览器可以看懂的东西
    * 打包后的东西（js,css,html等资源）会被放在 dist 目录下
    * 打包是"顺藤摸瓜"的打包，比如parcel index.html，实际会将g-button.vue,g-icon.vue等都进行打包，因为index.html中出现了这些
* parcel index.html
打包 index.html,并打开浏览器
* paecel build index.html     
打包一次，之后改动代码不重新打包，不打开浏览器
* parcel watch index.html
第一次打包后，一旦改动代码，立即重新打包，不打开浏览器。注意执行这条命令后就算输入别的命令（比如执行单元测试），在别的命令执行前也会自动先打包文件，这正是"watch"的意义所在
* 配合 karma 单元测试
    * 只打包一次+执行测试一次（这意味着每改变一次代码就必须再输入一次命令）:parcel build test/* --no-cache --no-minify && karma start --single-run
    * 自动打包+自动执行测试用例（这意味着只要输入一次命令，从此再不必输入，代码自己打包，自己测试，随时看到最新的结果）：parcel watch test/* --no-cache & karma start
        * 注意如果只有karma start的话，那么代码的变化就无法被karma检测到，测试有效性就不好。也就是说 karma 必须有人告诉他要测试的代码变了，它只会自动测试，不会自动打包


* [运行 parcel 时，出现 No entries found 报错怎么办？](https://blog.csdn.net/weixin_42971942/article/details/88345351)
* [[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. ]()
根据[ vue 文档](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)描述，需在 package.json 中添加如下内容
```
  "alias": {
    // 只包含运行时版->完整版
    "vue" : "./node_modules/vue/dist/vue.common.js"
  }
```

#### 单元测试
* 要点：作用域隔离，断言
* Mocha可以用来写测试用例
``` 
describe '人类'
    it has a hed
    it has two eyes
    it can run
```  
* 为什么测试‘点击 button 触发 touch 事件’不能用以下方式
```
vm.$on('touch', function(){
    // console.log('touch')
    // expect(1).to.eq(1)
})
vm.$el.click()
```
    * 因为我们要用 expect 实现“监听touch事件”，不能用 console.log
    * 但是 expect(1).to.eq(1) 这种写法不能让我们知道回调函数是否执行
所以我们需要的是：用 expect 描述‘回调函数被执行’这件事情
```
const callback = sinon.fake(); // 一但 callback 被调用，会再内存中留下标记
vm.$on('touch', callback)
vm.$el.click() // 注意如果测试正确，这里 callback 已经被调用了
expect(callback).to.have.been.called // 去问内存：callback 是否被调用了？
``` 
* [expex](https://www.chaijs.com/api/bdd/)
    * 判断是否存在（存在=不为假值）：expect(Button).to.be.ok
    * 判断是否相等：expect(xxx).to.eq(yyy)
    * 判断对象/数组值是否相等：expect([1,2]).to.deep.equal([1,2])\
    * 判断值是否为NaN：expect(NaN).to.be.NaN
    
#### CSS 知识点
* css 兼容查询：www.canIuse.com
* 字体不要设置固定 font-size ,应该用变量
* flex布局遇到同排元素不对齐
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
    
* 组件注册
    * 记住全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生 
  
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
   
#### npm知识点
* npm init：初始化一个package.json
    * 适用场景：需要创建一个新项目
* npm install:根据package-lock.json下载相应包
    * 
    * 适用场景：从github上下了一个不含node_modules的项目
* npm run
    * 在 package.json 的 scripts 属性中加入命令（例如："foo": "echo foo"）就可以通过 npm run foo 运行对应命令。
    * 这是 npm 提供的一个很方便的运行项目相关的自动化任务的机制，
     
    
    

    