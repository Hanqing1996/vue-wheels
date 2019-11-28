<template>
    <div class="popover" @click="onClick" style="border:1px solid red">
        <div ref="contentWrapper" class="content-wrapper" v-show="visible">
            <slot name="content"></slot>
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
        methods: {
            // onClick不是被点击触发的,而是因为内部popover元素被点击,冒泡给popover触发的
            onClick(event) {


                /**
                 * 判断冒泡给popover的是哪个元素
                 * */
                // 是button触发的,则做进一步操作
                if (!this.$refs.contentWrapper.contains(event.target)) {
                    this.visible = !this.visible
                    if (this.visible === true) {
                        // setTimeout让"设置document的监听事件"这个动作发生在冒泡结束之后，从而阻止了这次button的点击事件冒泡到document(只阻止了这一次)
                        setTimeout(()=>{
                            let eventHandler = (event) => {

                                if(!this.$refs.contentWrapper.contains(event.target)){
                                    // console.log('document监听事件开始生效');
                                    this.visible = false
                                    document.removeEventListener('click', eventHandler)
                                }
                            }

                            // 设置document的监听事件.这里实际是利用了事件冒泡机制,document内的一切元素的点击事件都会冒泡到document
                            document.addEventListener('click', eventHandler)
                        },0)
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .popover {
        position: relative;
        margin-top: 40px;
    }

    /*浮动布局*/
    .content-wrapper {
        position: absolute;
        left: 0px;
        top:-30px;
        border: 1px solid red;
        box-shadow: 0 0 3px rgb(0, 0, 0.5);
    }
</style>