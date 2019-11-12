import Toast from './toast'

// 以下是轮子开发者写的插件内容,用户不能写入内容
function createToast(Vue, message, {propsData}) {
    console.log(propsData);
    // vue 动态创建实例
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    // slot 要放在 mount() 之前,toast 是一个　vue 实例
    toast.$slots.default = [message]
    toast.$mount() // 这里$mount()无论填什么,都不改变vm.$el,所以索性啥都不填
    // 这里的document是index,html
    document.getElementById('toastBlock').appendChild(toast.$el)
    return toast
}

let currentToast

export default {

    install(Vue, options) {
        // message作为组件的slot内容,toastOptions提供组件的props等参数
        Vue.prototype.$toast = function (message, toastOptions) {

            // 如果已经存在一个 toast,关闭它再创建一个新的 toast
            if(currentToast){
                currentToast.close()
            }
            currentToast=createToast(Vue, message, {propsData: toastOptions})
        }
    }

}