import Toast from './toast'
// 以下是轮子开发者写的插件内容,用户不能写入内容
export default {
    install(Vue,options){
        // message作为组件的slot内容,toastOptions提供组件的props等参数
        Vue.prototype.$toast=function (message,toastOptions) {
            // vue 动态创建实例
            let Constructor=Vue.extend(Toast)
            let vm=new Constructor({
                propsData:toastOptions
            })
            // slot 要放在 mount() 之前
            vm.$slots.default=[message]
            vm.$mount() // 这里$mount()无论填什么,都不改变vm.$el,所以索性啥都不填
            // 这里的document是index,html
            document.getElementById('toastBlock').appendChild(vm.$el)
        }
    }
}