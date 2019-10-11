import Vue from 'vue'
import Button from './button'
import Icon from './icon'

// 所有组件在这里注册
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
    el:"#app",
    data:{
        loadingStatus1:false,
        loadingStatus2:false
    }
})