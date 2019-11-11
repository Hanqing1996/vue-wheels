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


// new Vue 和组件注册没有任何关系
new Vue({
    el: "#app",
    data: {
        loadingStatus1: false,
        loadingStatus2: false,
        message:'hi'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        eve2(e){
            console.log(e);
        }

    }
})
