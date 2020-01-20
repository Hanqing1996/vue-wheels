<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper"　:class="contentWrapperClasses" v-if="visible">
            <slot name="content"　:close="closeContent"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "WheelPopover",
        data() {
            return {
                visible: false
            }
        },
        // 根据trigger值动态为popover添加监听事件
        mounted(){
            if(this.trigger==='click'){
                this.$refs.popover.addEventListener('click',this.onClick)
            } else{
                this.$refs.popover.addEventListener(this.openEvent,this.openContent)
                this.$refs.popover.addEventListener(this.closeEvent,this.closeContent)
            }
        },
        props:{
            position:{
                type:String,
                validator(value) {
                    return ['top','bottom','left','right'].indexOf(value)>=0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            openContent(){

                this.visible=true// 打开content
                //只有当触发事件为click,才开启document对于其它位置的监听
                if(this.trigger==='click'){
                    this.onClickDocument()
                }
            },
            closeContent(){
                this.visible=false// 关闭content
            },
            onClickDocument(){
                // setTimeout让"设置document的监听事件"这个动作发生在冒泡结束之后，从而阻止了这次button的点击事件冒泡到document(只阻止了这一次)
                setTimeout(()=>{
                    let eventHandler = (event) => {

                        //由于setTimeout的存在,在点击close按钮及trigger按钮后closeContent会先于eventHandler被触发，则this.$refs.contentWrapper为undefined
                        if(!this.$refs.contentWrapper)
                            return


                        // 只有点击其它位置,才会触发eventHandler("其它位置的定义"是event.target不是文本内容和button)
                        if(!this.$refs.contentWrapper.contains(event.target)&&!this.$refs.triggerWrapper.contains(event.target)){

                            this.closeContent()
                            document.removeEventListener('click', eventHandler)
                        }
                    }
                    document.addEventListener('click', eventHandler)// 设置document的监听事件.这里实际是利用了事件冒泡机制,document内的一切元素的点击事件都会冒泡到document
                },0)
            },

            // onClick不是被点击触发的,而是因为popover内部元素被点击,冒泡给popover触发的
            onClick(event) {
                // 判断冒泡给popover的是哪个元素,若是trigger按钮触发的,则做进一步操作
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if(this.visible===true){
                        this.closeContent()
                    } else {
                        this.openContent()
                    }
                }
            }
        },
        computed: {
            openEvent(){
                if(this.trigger==='click'){
                    return 'click'
                } else{
                    return 'mouseenter'
                }
            },
            closeEvent(){
                if(this.trigger==='click'){
                    return 'click'
                } else{
                    return 'mouseleave'
                }
            },
            contentWrapperClasses: function () {
                return [this.position && `position-${this.position}`]
            }
        },
    }
</script>

<style lang="scss"　scoped>
    .popover {
        position: relative;
        margin-left:100px;
        margin-right: 100px;
    }

    /*浮动布局*/
    .content-wrapper {
        position: absolute;
        left: 0px;
        top:-60px;
        border: 1px solid red;
        box-shadow: 0 0 3px rgb(0, 0, 0.5);
        &.position-left{
            left: -80px;
            top:5px;
         }
        &.position-right{
            left: 180px;
            top:5px;
         }
        &.position-bottom{
            left: 0px;
            top:45px;
         }
    }
</style>