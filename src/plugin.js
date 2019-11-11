import Toast from './toast'

export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message) {
            // vue 动态创建实例
            let Constructor=Vue.extend(Toast)
            let vm=new Constructor()
            // slot 要放在 mount() 之前
            vm.$slots.default=message
            vm.$mount() // 这里$mount()无论填什么,都不改变vm.$el,所以索性啥都不填
            // 这里的document是index,html
            document.getElementById('toastBlock').appendChild(vm.$el)
        }
    }
}