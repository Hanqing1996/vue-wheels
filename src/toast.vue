<template>
    <div class="toast" >
        <slot></slot>
        <span class="line"></span>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    // 构造组件的选项
    export default {
        name: "wheelToast",
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default: 5
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return {
                        text:'关闭',
                        callback:undefined
                    }
                }
            }
        },
        mounted() {
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
        },
        methods:{
            // 关闭 toast(彻底销毁 DOM 元素和 vue 实例)
            close(){
                // this.$destroy()不会把this.$el从文档中移除
                this.$el.remove()
                this.$destroy()
            },
            // autoCloseDelay秒内如果closeButton被点击，则执行callback函数
            onClickClose(){
                this.close() //关闭toast
                // 避免用户未传入closeButton及callback
                if(this.closeButton&& typeof this.closeButton.callback==='function'){
                    this.closeButton.callback(this) //执行plugin.js中的callback函数
                }
            },
            log(){
                console.log('测试callbak的回传功能');
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size; height: $toast-height; line-height: 1.8;
        position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
        color: white;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        padding: 0 16px;
    }
    .close{
        padding-left: 16px;
    }
    .line{
        height: 100%;
        margin-left: 10px;
        border-left: 1px solid #666;
    }
</style>