/**
 * 1. npx parcel index.html 打开浏览器并执行以下测试用例
 * 2. 将 app.js 去掉后运行 npx parcel build test/* --no-cache --no-minify ,npx karma start --single-run 仍然能正常测试
 */
import Vue from 'vue'
// button
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
// input
import Input from './input'
// 以下为 button 测试代码
import chai from 'chai'
import spies from 'chai-spies'


/**
 * 1. 所有组件在这里全局注册，注意 loadingStatus1,loadingStatus2 属于new的Vue例的data对象，不属于以下组件的data函数
 * 2. 全局注册意味着：这三个组件在各自内部也都可以相互使用。
 */

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

Vue.component('g-input', Input)



// new Vue 和组件注册没有任何关系
new Vue({
    el: "#app",
    data: {
        loadingStatus1: false,
        loadingStatus2: false
    }
})

chai.use(spies)
const expect = chai.expect

// 单元测试
// 组件输入参数（props里看）个数，事件个数，样式
try {
    // 测试按钮含有 icon
    {
        const Constructor = Vue.extend(Button)
        // 生成一个 vue 实例
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })

        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-settings')
        // 卸载vue实例
        vm.$el.remove()
        // 测试完，销毁
        vm.$destroy()
    }
    // 测试 loading
    {
        const Constructor = Vue.extend(Button)
        // 生成一个 vue 实例
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })

        vm.$mount() // 把 button 挂载到文档之外
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$destroy()
    }
    // 测试默认svg样式order
    {
        // 样式测试，元素必须挂载到页面（document）内，否则 css 不起效果
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        // 生成一个 vue 实例
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        // 把 button 挂载到 div 上
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg') // 获取 button 的子元素 svg
        let {order} = window.getComputedStyle(svg) // 获取 svg 样式（一个对象）
        expect(order).to.eq('1') // 默认 .icon 在 .content 左边。
        vm.$el.remove()
        vm.$destroy()
    }
    // 测试 icon-position
    {
        // 将 vue实例挂载到 document 内部的 div#test 上，会发现 div#test 被组件根元素替换
        const div = document.getElementById('test')
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')

        vm.$el.remove()
        vm.$destroy()
    }

    // 测试节点 button 的 click 事件能否触发 vue实例的touch事件
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        vm.$mount()
        let spy = chai.spy(function () {
        })
        // 监听当前实例上的自定义事件 touch，回调函数为 spy
        vm.$on('touch', spy)
        // 注意 vm 是一个vue实例，button 是一个真实的选择器（DOM节点）
        let button = vm.$el
        // 触发 button 的 click 事件
        button.click()
        // 期待 button 的 click 事件被触发后，spy 被调用
        expect(spy).to.have.been.called()

        vm.$el.remove()
        vm.$destroy()
    }
} catch (e) {

}



