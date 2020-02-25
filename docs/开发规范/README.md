
# 开发规范

## 持续集成
#### 持续集成是什么
1. 持续集成指的是只要代码有变更，就自动运行构建，测试，部署。
2. 持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。

#### travis CI 踩坑
* test
> 本项目测试框架采用 Karma。在添加测试覆盖率相关内容后，始终无法通过 pass。检查 log 发现，test 没有自动 exit。于是将 script 中的 watch 参数设置为 false，无果。翻阅 Karma 文档，知道了有 命令参数 -- single-run。尝试添加后，成功。 
* deploy
> 使用 travis CI 进行 deploy 是需要对 github_token 进行处理的，详情可以参考[这里](https://docs.travis-ci.com/user/deployment/pages/#setting-the-github-token)。主要是两个步骤，一是生成 github_token，用于授权给 CI 平台；二是在 travis CI 中进行环境变量设置，以保证 .travis.yml 能读取到 token。

## 及时销毁
> 在 beforeDestroy 中销毁注册的事件，创建的元素（防止内存泄漏）
* 在 mounted 中注册事件，创造元素
```
table2 = this.$refs.table.cloneNode(true)
this.table2=table2 // 便于销毁table2

this.onWindowResize = () => {
    this.updateWidth()
}
window.addEventListener('resize', this.onWindowResize)
```
* 在 beforeDestroy 中销毁注册的事件，创建的元素（防止内存泄漏）
```
beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
}
this.table2.remove()
```

## 传递对象
* 不安全的写法：直接传递字符串
> 隐患：浏览器对拼写错误的字符串是不会报错的
```
res.send(`{id:${req.file.filename}}`)
```
* 安全的写法：先构造对象，再转为字符串类型
```
let fileName=req.file.filename
let object={id:fileName}
res.send(JSON.stringify(object))
```

## 重构
1. 示范
```
let xhr = new XMLHttpRequest()
xhr.open(this.method, this.action)
xhr.send(formData)
xhr.onload = () => {
    let img = document.querySelector('img')
    this.url =this.parseResponse(xhr.response)
}
```
应该重构为
```
// success 是个回调函数
function xxx(formData,success){
    let xhr = new XMLHttpRequest()
    xhr.open(this.method, this.action)
    xhr.send(formData)
    // 因为 success 必须接受参数，所以这里需要用一层函数包裹
    xhr.onload =()=>{
        success(xhr.response)
    }
}

xxx(formData,(response)=>{
    let img = document.querySelector('img')
    this.url =this.parseResponse(response)
})
```
2. 重构要点
* 加注释，明确每部分代码的功能
* 重复出现的变量/操作，抽取到一个函数里面
* 最终每个函数不应超过5行
* 重构是每天都要进行的


## 单向数据流
> 比如我们要修改组件的 selected 属性
* 错误做法:
```
// defaultSelected 从未被修改
<pager :defaultSelected="defaultSelected"></pager>

props:{
    defaultSelected: {
        type: Number,
        required: true
    }
}
data(){
    return {
        currentSelected:this.defaultSelected
    }
}

// 之后更新 currentSelected
```
正确做法：让父组件更新 props
```
// selcted 会在 updateSelcted 被触发后被修改
<pager :selcted.sync="selcted"></pager>

props: {
    selcted: {
        type: Number,
        required: true
    }
}

updateSelcted(newItem){
    this.$emit('update:selcted',newItem)
}
```
注意有时 selected 是数组，那么我们要先进行深拷贝
```
updateSelected(newItem){
    let copy=JSON.parse(JSON.stringIfy(this.selected)) 
    copy.push(newItem) // 对 copy 进行一些操作
    this.emit('update:selected',copy) // 单向数据流，让父组件来修改传入的 selected
}
```

## 命名
1. 命名一律不使用缩写
2. 对于一时不知道叫什么的函数，应该暂时起名为 xxx,yyy,zzz...

### function
* inselectedItemsIds
> 根据 Id 查找 item 是否在 selectedItems 中，返回值为 boolean 类型
* onRemove
> 在 remove 前要执行的操作
```
<g-button @click="onRemove">删除</g-button>

onRemove(){
    alert('确定删除吗')
}
```
* afterUploadFiles 
> 在 uploadFiles 后执行的操作
### variable
* fileList
> 不是 filesList
* visible
> 是否为可见状态，注意不能命名为 ifShow，因为 show 为动词。也不能命名为 ifVisible 