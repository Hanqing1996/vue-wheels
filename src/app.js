import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

// 所有组件在这里注册
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:"#app",
    data:{
        loadingStatus1:false,
        loadingStatus2:false
    }
})