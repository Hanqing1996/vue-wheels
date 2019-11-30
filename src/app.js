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
// layout
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
// toast
import Toast from './toast'
import plugin from './plugin'
// tabs
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
// popover
import Popover from './popover'
// collapse
import Collapse from './collapse'
import CollapseItem from './collapse-item'
// cascader
import Cascader from './cascader'

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)

// new Vue 和组件注册没有任何关系
new Vue({
    el: "#app",
    data: {
        loadingStatus1: false,
        loadingStatus2: false,
        message: 'hi',
        selectedTab: 'sports',
        source: [
            {
                name: '浙江',
                children: [
                    {
                        name: '杭州',
                        children: [
                            {name: '上城'},
                            {name: '下城'},
                            {name: '江干'},
                        ]
                    },
                    {
                        name: '嘉兴',
                        children: [
                            {name: '南湖'},
                            {name: '秀洲'},
                            {name: '嘉善'},
                        ]
                    },
                ]
            },
            {
                name: '福建',
                children: [
                    {
                        name: '福州',
                        children: [
                            {name: '鼓楼'},
                            {name: '台江'},
                            {name: '仓山'},
                        ]
                    },
                ]
            },
            {
                name: '安徽',
                children: [{
                    name: '合肥',
                    children: [{
                        name: '瑶海'
                    }, {
                        name: '庐阳'
                    }]
                }]
            }]
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
                    enableHTML: true,
                    autoClose: 1000,// 1000秒，方便测试
                    closeButton: {
                        text: '知道了',
                        // 这里的toast是plugin.js里的createToast函数内的toast
                        callback: (toast) => {
                            console.log('用户说他知道了')
                            toast.log()
                        }
                    },
                    position: 'middle'
                })
        },
        yyy() {
            console.log('popover内元素冒泡结束');
        }
    }
})
