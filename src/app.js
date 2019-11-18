import Vue from 'vue'
// button
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
// input
import Input from './input'
// grid
import Row from './row'
import Col from './col'
// default-layout
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
// toast
import Toast from './toast'
import plugin from './plugin'

// 这里的注册是为 index.html 服务
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
// 用户使用插件
Vue.use(plugin)


// new Vue 和组件注册没有任何关系
new Vue({
    el: "#app",
    data: {
        loadingStatus1: false,
        loadingStatus2: false,
        message: 'hi'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast() {
            // $toast()参数由用户自定义，$toast的具体定义见plugin.js
            this.$toast('这是<strong style="color: blue">toast</strong>信息',
                {
                    // 用户选择开启“向slot中填入HTML"
                    enableHTML:true,
                    autoClose: 1000,// 1000秒，方便测试
                    closeButton: {
                        text: '知道了',
                        // 这里的toast是plugin.js里的createToast函数内的toast
                        callback: (toast) => {
                            console.log('用户说他知道了')
                            console.log('toast是:',toast)
                            toast.log()
                        }
                    },
                    position:'middle'
                })
        }
    }
})
