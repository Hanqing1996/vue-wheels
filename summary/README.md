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
    * 手动添加vue实例监听事件及回调函数，手动触发元素事件，观察回调函数是否执行
    * 测试是针对组件的，与index.html无关
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
* 发布 npm 包后，发现 node 不认识 含有 import 的index.js，因此需要先用 parcel build index.js,再在package.json中将 main 选项改为 dist/index.js 
* 之后更新 npm 包，也要 parcel build       


* [运行 parcel 时，出现 No entries found 报错怎么办？](https://blog.csdn.net/weixin_42971942/article/details/88345351)
* [[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. ]()
根据[ vue 文档](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)描述，需在 package.json 中添加如下内容
```
  "alias": {
    // 只包含运行时版->完整版
    "vue" : "./node_modules/vue/dist/vue.common.js"
  }
```
然后重新运行
```
npx parcel index.html
```

#### 单元测试
* css 单元测试，必须把 vm 挂载到文档内的一个元素上
```
const div = document.createElement('div')
document.body.appendChild(div)

vm = new Constructor({}).$mount(div)
```
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
    * 判断对象/数组值是否相等：expect([1,2]).to.deep.equal([1,2])
    * 判断值是否为NaN：expect(NaN).to.be.NaN 
* [done](https://github.com/Hanqing1996/vue-wheels/blob/master/src/row.vue)
    * 如果不加 done it(){}里的代码将全部同步执行    
    
#### CSS 知识点
* css 兼容查询：www.canIuse.com
* 字体不要设置固定 font-size ,应该用变量
* flex布局遇到同排元素不对齐
```
g.button{
    vertical-align: middle;
}
```     

#### TravisCI持续集成测试
* 添加.travis.yml
* 把项目 push 到 github
* 在[travis-ci](https://www.travis-ci.org/)添加项目

#### Karma
* 具体配置写在 karma.conf,js 中
* 用于呼起浏览器，加载测试脚本，然后运行测试用例

#### Mocha
describe,it 语法

#### chai
expect 语法

#### Sinon
为组件的事件测试设置回调函数 callback
```
const callback = sinon.fake();
vm.$on('click', callback)
```

#### Sinon-Chai
检测vue实例调用的回调函数的参数 calledWith
```
expect(callback).to.have.been.calledWith(event)
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
如果validate返回false,将在浏览器中返回 Vue warn
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
* 组件的name作用
```
export default {
    name: "WheelInput"
}
```  
1. 配合 vue.js.devtools(chrome插件) 使用
2. 判断A组件的子组件包不包含B
```
mounted() {
    this.$children.forEach((vm) => {
        if (vm.$options.name === 'WheelSider') {
            this.hasSider = true
        }
    })
}
```
* scoped
为组件设置 css 作用域（本质是不同组件设置不同ID）
* class绑定
根据一个boolean数组来确定要加载哪些class
```
<div id="app">
    <div :class="[class1,class2]">123</div>
</div>

var vm = new Vue({
    el: '#app',
    data: {
        class1:1&&'9',
        class2:'2'
    }
})
```
结果为 <div class="9 2">123</div>,因为class1为'9',class2为'2'',皆为真值;所以返回数组为[true,true]
```
<div id="app">
    <div :class="[class1,class2]">123</div>
</div>

var vm = new Vue({
    el: '#app',
    data: {
        class1:undefined&&'9',
        class2:'2'
    }
})
```
结果为 <div class="2">123</div>,因为class1为undefined,假值,class2为'2'',皆为真值;所以返回数组为[false,true],如果为true,则class名有效

    
#### 发布 wheel 包（需FQ）
1. 更新 package.json
2. 在 package.json 里将版本号改为 0.0.1，等我们做完了再改成 1.0.0
3. 创建 index.js，在 index.js 里将你想要导出的内容全部导出
   * export {Button,ButtonGroup,Icon}
4. 去 https://www.npmjs.com/ 注册一个账户
5. 确认一下邮箱（必须）
6. 在项目根目录运行 npm adduser
7. 如果错误提示里面含有 https://registry.npm.taobao.org 则说明你的 npm 源目前为淘宝源，需要更换为 npm 官方源（https://registry.npmjs.org/）
   * npm config list,修改npmrc实现
8. 运行 npm publish
   * 报错：You do not have permission to publish "package-demo".说明包重名了，在package.json修改name
   * 允许先publish,再push。因为publish是从本地上传的
   * 每次 bump version 后记得修改 package.json 的 version,再publish
   * 由于 node 不认识 import,我们需要每次需要先 npx parcel build index.js，再publish


#### 组件注册
注册的目的只有一个，使得组件可以被调用
* 全局注册
全局注册的组件在各自内部也都可以相互使用。
```
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
```
* 局部注册
想要在 g-button 的 template 内使用 g-icon,就要在 g-button 中局部注册 g-icon
```
import Icon from './icon'

export default {

    components:{
        'g-icon':Icon
    }
```
等效于以下全局注册
```
import Button from '../src/button'
import Icon from '../src/icon'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
```
* :value与value
    * 接收变量，用 :value。接收字符串，用 value。也就是说，:是被动添加的
    * :span="2" 表示传递的是数值2, 而 span="2" 表示传递的是字符串"2"
    * :loading="false" 表示传递的是布尔量false, 而 loading="false" 表示传递的是字符串"false"
* class 绑定
```
<g-input value="王五" error="姓名不少于两个字"></g-input>
......
<template>
    <div class="wrapper" :class="{errorstyle:error}">
        <input type="text">
    </div>
</template>
......
props:{
    error:{
        type:String
    }
}
......
&.errorstyle {
    > input { border-color: $red; }
}
```
等价于
```
<g-input value="王五" error="姓名不少于两个字"></g-input>
......
<template>
    <div class="wrapper" :class="{error}">
        <input type="text">
    </div>
</template>
......
props:{
    error:{
        type:String
    }
}
......
&.error {
    > input { border-color: $red; }
}
```
* 使用 template 避免引入多余的 标签
```
<span v-if="error">
    <Icon name="settings" class="icon"></Icon>
    <span>{{error}}}</span>
</span>
```
等价于
```
temp
```
第二种写法更好，因为没有引入多余的标签，至于 template，它会像雪一样融化




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
    * css,innerHTML这些东西只有在实例被挂载之后才能看到，之前是undefined    
3. update:当vue实例里面的data数据变化时，触发组件的重新渲染
    * beforeUpdate：
    * updated：
4. destroy:vue实例被销毁
    * beforeDestroy：
    * destroyed：

#### created 和 mounted 的区别
* created 类似于
```
var div=document.createElement('div')
```    
* mounted 类似于
```
document.body.appendChild(div)
```    
* 父子 created 和 mounted 顺序
```
father.created
children.created
children.mounted
father.mounted
```

#### scss语法
* &
```
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}
```
编译为
```
a{
  font-weight: bold;
  text-decoration: none; 
  }
a:hover {
  text-decoration: underline; 
}
body.firefox a {
  font-weight: normal; 
}
```
* 声明变量
```

$height: 32px;
.wrapper {
    > input {
        height: 32px; // 使用变量 height
    }
}
```
    
   
#### input 需求分析
* 输入
    * 提示 
    * 报错
* 复制/粘贴
* 键盘 Tab 空位
* 敲击回车
* 不可输入   
* hovered
* focused
* disabled
* readonly
* error(可与上面状态叠加)
* success(同上)

#### grid 需求分析
* span 表示跨度,gutter 表示空隙长度
```
<g-row gutter=6>
    <g-col span=12></g-col>
    <g-col span=12></g-col>
</g-row>
<g-row gutter=10>
    <g-col span=8></g-col>
    <g-col span=8></g-col>
    <g-col span=8></g-col>
</g-row>
```

#### 响应式
* 页面缩小时col的offset.span随之变化
   
#### 重构
* 重复两次及以上的代码
* 一眼看不懂的代码
    * 排版复杂  
* 提取变量法    


#### 命名规范
HTML中的
```
<g-col :narrow-pc="{span:6,offset:6}"></g-col>
```
对应col.vue中的
```
props: {
    narrowPc:{
        type: Object
    }
}
```
-p对应P,即vue会把-后的第一个字母改为大写
   
   
#### innerHTML 和 outerHTML
```
<div id="app">
    <div class="child"></div> 
</div>

console.log(document.getElementById('app').innerHTML) // <div class="child"></div> 
console.log(document.getElementById('app').outerHTML) // <div id="app"><div class="child"></div></div> 
```
   
#### 打印出来的东西不一定是对的，因为可能在我们预想的变化发生之前，打印就执行了    


#### vue 的渲染（created 与 mounted）过程
* 普通 Dom 元素的渲染过程
```
const div=document.createElement('div')
document.body.appendChild(div)
```
* Vue 实例的渲染过程 
```
const div=document.createElement('div')
const child=document.createElement('div')
div.appendChild(child)
document.body.appendChild(div)

console.log(child.outerHTML) // 打印出的是 child 没有 mounted 时的状态

child.$mount() // 异步执行 
div.$mount() // 异步执行
```

#### [Toast 需求分析](https://xiedaimala.com/tasks/b59fb65d-2450-44c0-8078-51612dbbcc50)


#### 工程问题
* 直接改 Vue.prototype好不好?
    * 不好,可能覆盖用户到方法（侵入性太强）
* 在组件中写 import Vue from Vue 好不好
    * 不好,不能确定用户需要引入的是 Vue,可能是Vue2    

#### Vue 开发插件
1. [install]()
2. [use]()

#### [vue 动态创建实例]()

#### [slot 要放在 mount() 之前]()
 
####
 
     
    
    

    