---
sidebarDepth: 2
---
# vue summary

## data
> data 里面放组件自身能维护的数据。比如 popover 是否可见

## props 
1. props 里面放由父组件传回的数据。比如 dataSource 等用户数据，以及组件属性（name,width,height...）
2. props 里面的数据不许修改，要更新只能通过 $emit 触发，.sync等方式通知父组件处理
3. 一个组件的 props 必须正交
4. props 不能以 data-　开头


## computed
1. 如果某个值的产生需要用到 data/props，我们就把这个值放入 computed 中
```
// data1,prop2...变化后，将重新触发 fn,实现对 generatedValue 的更新
computed: {
    generatedValue: function () {
        return fn(data1,prop2...)
    }
}
```
2. 一般用于Class绑定或Style绑定
```
// Class绑定
computed: {
    toastClasses: function () {
        return [`position-${this.position}`]
    }
}
```
```
// Style绑定
computed: {
    colStyle() {
        return {
            paddingLeft: this.gutter / 2 + 'px',
            paddingRight: this.gutter / 2 + 'px'
        }
    }
}
```

## watch
1. watch 就是定向版的 update()，一旦某个 data/props 发生变化，就立即执行相应操作
```
// selectedItems可以是data，也可以是props（由父组件传回）
watch:{
    selectedItems(){
        if(selectedItems.length<10){
            console.log(长度小于10)
        }
    }
}
```
等价于
```
updated(){
    if(this.selectedItems.length<10){
        console.log(长度小于10)
    }
}
```
2. watch 与 computed 的区别
> computed 的作用是维护一个基于 data/props 的值，而 watch 是善后，是保证某个 data/prop 变化后相应操作能立即跟上。

## slots
1. $slots 要放在 $mount() 之前
2. 如何向组件的slot中插入HTML内容？
    * 这是一种危险的行为（阻止事件冒泡也是一种危险的行为）
    * 实现方法
    ```
    <div v-html="$slots.default[0]"></div>

    vm.$slots.default=['这是<strong style="color: blue">toast</strong>信息']
    ```
3. slot-scope
    * 传递属性
    ```
    <template slot="content" slot-scope="{close}">
        <g-button  v-on:click.native="close">关闭</g-button>
    </template>
    ```
    ```
    <slot name="content"　:close="closeContent"></slot>
    
    methods: {
        closeContent(){
            ...
        }
    }
    ```
* 传递对象
    ```
    <td>
        <slot name="content" :xxx="item"></slot>
    </td>
    ```
    ```
    <template slot="content" slot-scope="{xxx}">
        {{xxx.name}}
    </template>
    ```            
* slots 外部一般用一个标签包裹起来
```
<template>
    ...
    <div class="wrapper">
        <slots><slots>
    </div>
</template>
```

## 修饰符
#### [.sync](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)
对于
```
this.$emit('update:title', newTitle)
```
下面两种写法等价
```
<text-document :doc.title = $event @update:title="doc.title = $event"></text-document>
```
```
<text-document :title.sync="doc.title"></text-document>
```
也就是说sync的作用是让 title="doc.title" 异步执行多次（响应式）

#### [.native](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)
> 原生的事件是无法直接添加到组件上的,想要在组件上加原生的DOM事件，必须使用native修饰符
```
<g-button  v-on:click.native="close">close</g-button></div>
```
除了原生的DOM事件，还可能通过$emit触发组件上的事件
```
<g-button @beEmited="xxx">
```
beEmited事件是g-button内部的元素点击事件通过emit触发的
```
<template>
    <button @click="$emit('beEmited')"></button>
</template>
```


## 父子组件
#### 父子组件 created 和 mounted 顺序
```
father.created
children.created
children.mounted
father.mounted
```

#### 父子组件通信
* 父组件给子组件传递 props
```
<g-collapse :single="true">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
* 父组件根据子组件情况修改父组件 data
```
mounted() {
    this.$children.forEach((vm) => {
        if (vm.$options.name === 'WheelSider') {
            this.hasSider = true
        }
    })
}
```
* 父组件挑选符合条件的子组件,修改子组件 data
```
mounted() {

    // 把父组件的 gutter 传递给子组件
    this.$children.forEach((vm) => {
        vm.gutter = this.gutter
    })
}
```
* 父组件与符合条件的子组件通信
```
this.$children.forEach((vm)=>{
    if(vm.$options.name==="WheelTabsHead"){
        vm.$children.forEach((childVm)=>{
            if(childVm.$options.name=="WheelTabsItem"&&childVm.name==this.selected){
                this.eventBus&&this.eventBus.$emit('update:selected', this.selected,childVm)
            }
        })
    }
})
```
> 注意,由于父子组件挂载顺序的原因,所以在父组件的mounted中进行父子通信是最合适的

## 事件
#### $emit
1. $emit和$on必须作用在同一实例上
> 父组件 A 通过 props 的方式向子组件 B 传递，B to A 通过在 B 组件中 $emit, A 组件中 v-on 的方式实现。
```
// A.vue
<template>
    <div>
        <B @travel="callback"></B>
        ......
    </div>
</template>


// B.vue
<template>
    <div @click="emit">
    ......
    </div>
</template>

methods:{
    emit(){
        this.$emit('travel')
    }
}
```
2. $emit是不冒泡的
3. $emit 实现孙子组件向爷爷组件通信
> 前提：不考虑 eventBus
```
<grandPa @fatherSay="console.log('ok,grandPa konw it')">
    <father @childSay="this.$emit('fatherSay')">
        <child></child>
    </father>
</grandPa>

```
```
// child.vue
this.$emit('childSay')
```

#### $event
* 对于原生元素（如 button、input）来说，$event 是原始的 DOM 事件
```
<input type="checkbox"  @change=changeStatus($event,item)>

changeStatus(event,item){

}
```
> 如果回调函数只有 event 一个参数，那么 $event 可以省略
```
<input type="checkbox"  @change=changeStatus>

changeStatus(event){

}
```
* 对于自定义组件（如 child）来说，$event 是其自身 $emit 发出的第二个参数
```
    <div id="app">
        <child @click="clickChild(a,$event)"></child>
    </div>

    Vue.component('child', {
        data: function () {
            return {}
        },
        template: '<button @click="clickButton">点我</button>',
        methods: {
            clickButton() {
                this.$emit('click', 1,2) // $emit的第二个参数为$event
            }
        }
    })

    var example1 = new Vue({
        el: '#app',
        data: {
        },
        methods: {
            clickChild(e) {
                console.log(e); // 1，说明$event值为1
            }
        }
    })
```

#### eventBus
> eventBus 与 $on(),$emit() 同属于发布订阅模式，不同于后者需要依附于某个 vue 实例，eventBus 作为事件中心，独立于各个组件。因此可以利用它实现多组件间通信
```
this.eventBus&&this.eventBus.$emit() // 发布

this.eventBus&&this.eventBus.$on() // 订阅

this.eventBus.$off() // 取消订阅
```

## 异步
对于
```
<g-uploader :fileList.sync="fileList">{{}}</g-uploader>

data(){
    fileList:[]
}
```
在 uploader 组件中更新 fileList 后，是无法直接获取最新的 fileList 
```
props:{
    fileList:{
        type:Array
    }
}
let arr=[{name:'libai'}]
this.$emit('update:fileList',arr)
console.log(this.fileList) // []
```
这是因为父组件获取到更新后的 fileList 是同步的（即sync是同步的），而父组件将更新后的 fileList 传回给子组件是异步的（即vue 的 render 是同步的）
```
let arr=[{name:'libai'}]
this.$emit('update:fileList',arr)
setTimeout(()=>{
    console.log(this.fileList); // [{name:'libai'}]
})
```


## 依赖注入
```
// nav
provide() {
    return {
        root: this
    }
}
methods:{
    addItem(){...}
}
```
```
// nav-item
inject:['root'],

this.root.addItem(this) // 调用 nav 的方法
```

## 生命周期
* [测试](https://www.jianshu.com/p/b88572d8f80a)
#### created
> vue实例被创建,可访问到 data/props
```
// 类似于
var div=document.createElement('div')
```
#### mounted
1. vue实例被挂载到真实的DOM节点,如果要执行DOM操作及CSS有关操作，必须在 mounted 中
```
// 类似于
document.body.appendChild(div)
```
2. 只在组件被挂载到DOM元素上时执行一次，data/props的改变不会触发它
3.  mounted 和 updated
    * 都会重新渲染组件
    * 第一次打开页面/手动刷新页面，会触发 mounted，点击按钮改变组件 state ，触发 updated
    * mounted 总是伴随着 updated


#### uodated
> 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
#### beforeDestroy
> 在 beforeDestroy 中销毁注册的事件，创建的元素（防止内存泄漏）


## v-for
> v-for 一定要搭配 key=id
* [为什么想删除第一项，结果确实第三项被删除了](https://jsbin.com/gacokit/8/edit?html,js,output)
> 可以认为在不加 key 的情况下 vue 是按照索引来判断要删除哪些元素的。
原先的索引
```
0 1 2
```
删除第一项，重新生成索引后
```
0 1
```
vue发现少了最后一项，于是把最后一项删除了，导致了bug
* 一般用 item.id 作为 key（不能:key=index，原因见上）
```
<li v-for="(item,index) in items" :key=item.id>
    <child>
    </child>
    <button @click="remove(index)">删除</button>
</li>
```
* 如果是 template 的话,key 要加在实际的DOM元素上
```
<template v-for="item,index in dataSource">
    <tr :key="item.id">
    </tr>
</template>
```

## 插件
* toastPlugin
> 用于生成和销毁 toast
* validatorPlugin
> 用于表单验证

## 指令
> 用于封装DOM操作
* clickOutside
```
<div　ref="cascader" @clickOutside="close"></div>
```
> 点击除 cascader 外的其它位置,则关闭 popover,并自动移除对其它位置的监听