
# 单元测试总结

## BDD
> Behavior Driven Development（行为驱动开发）

## TDD
> Test Driven Development（测试驱动开发）
1. 先写错误情况（比如邮箱验证，先观察测试能否发现邮箱格式不正确的情况），再写正确情况
2. 手动添加实例监听事件（listener），手动触发元素事件（trigger），观察回调函数是否执行（callback）

## 目录结构
```
|-- tests
    |-- fixture
    |   |-- db.js
    |-- unit
        |-- xxx.test.spec.js
```
* tests/fixture: 用于存放测试数据。
* tests/unit: 用于存放测试用例。

## 测试对象
* 测DOM元素是否存在
* 测事件
* css不测

## Karma
* 作用
> 提供测试环境（呼起浏览器，加载测试脚本，然后运行测试用例）
* 配置
> 具体配置写在 karma.conf.js 中
* JSDOM
> 与Karma作用类似,是在 Node 虚拟浏览器环境运行测试。也就是说它不呼起浏览器。
* [用 Karma 测试单文件组件](https://vue-test-utils.vuejs.org/zh/guides/testing-single-file-components-with-karma.html)


#### Mocha,chai,Sinon
只是提供测试语法
* Mocha
> describe,it 语法
* chai
> expect 语法
* Sinon/Sinon-Chai
> 为组件的事件测试设置回调函数
```
const callback = sinon.fake();
```

#### 事件测试
* 为什么测试'点击 button 触发 touch 事件'不能用以下方式

```
vm.$on('touch', function(){
    console.log('touch')
    expect(1).to.eq(1)
})
vm.$el.click()
```
1. 因为我们要用 expect 实现“监听touch事件”，不能用 console.log
2. 但是 expect(1).to.eq(1) 这种写法不能让我们知道回调函数是否执行
> 所以我们需要的是：用 expect 描述"回调函数被执行了"这件事情
```
const callback = sinon.fake(); // 一但 callback 被调用，会再内存中留下标记
vm.$on('touch', callback)
vm.$el.click() // 注意如果测试正确，这里 callback 已经被调用了
expect(callback).to.have.been.called // 去问内存：callback 是否被调用了？
```
* listeners:添加在实例上，用于设置组件的update/add:selected之类事件的回调函数
```
it('会触发 update:selected 事件', (done) => {
    Vue.component('g-nav-item', NavItem)
    const callback = sinon.fake();
    const wrapper = mount(Nav, {
        propsData: {
            selected: 'home'
        },
        slots: {
            default: `
    <g-nav-item name="developers">开发团队</g-nav-item>
`
        },
        listeners: {
            'update:selected': callback
        }
    })
    wrapper.find('[data-name="developers"]').trigger('click')
    expect(callback).to.have.been.calledWith('developers')
    done()
})
```
 
## 关于异步
> 由于DOM元素的渲染是异步的，所以我们往往需要在设置 PropsData 后异步地测试DOM元素情况
```
it('toast 接受 autoClose　属性', (done) => {
    const wrapper = mount(Toast, {
        propsData: {
            autoClose: 1
        },
    })
    // 确保在vm.execAutoClose执行后再去判断vm.$el是否被移出document.body
    setTimeout(() => {
        // 判断vm.$el是否被移出document.body
        expect(document.body.contains(wrapper.element)).to.equal(false)
        done()
    }, wrapper.props('autoClose') * 1000)
})
``` 

## data-xxx
> 对于 selected 属性的测试，常用 data-xxx 来标记DOM元素
```
<nav-item name="home"></nav-item>
```
```
// nav-item.vue
<template>
    <div :data-name="name" :class="{selected}">
    ...
    </div>
</template>
```
```
  it('支持 selected 属性', (done) => {
    Vue.component('g-nav-item', NavItem)
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
        ...
      }
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
      done()
    })
  })
```

## 优先级
> 比如邮箱验证时，required 的优先级高于 pattern
```
it('required & pattern', () => {
    let data = {
        email: ''
    }
    let rules = [
        {key: 'email',pattern:'email',required:true}
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.eq('必填')
    expect(errors.email.pattern).to.not.exist // 只显示"必填"这一错误信息
})
``` 
> 而 pattern 与 minLength 同级
```
it('pattern & minLength', () => {
    let data = {
        email: '12'
    }
    let rules = [
        {key: 'email', pattern: 'email', required: true, minLength: 6}
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
    expect(errors.email.minLength).to.eq('太短')
})
```