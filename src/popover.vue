<template>
    <div class="popover" @click.stop="xxx">
        <!--@click.stop的结果是content-wrapper的点击事件不会冒泡到document-->
        <div ref="contentWrapper" class="content-wrapper" v-show="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
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
            xxx() {

                this.visible = !this.visible
                // 点击按钮以外区域,关闭content-wrapper
                if (this.visible === true) {
                    let eventHandler = () => {
                            // console.log('document监听事件开始生效');
                            this.visible = false
                            document.removeEventListener('click', eventHandler)
                            // console.log('移除document监听器');

                    }
                    // 设置document的监听事件.这里实际是利用了事件冒泡机制,document内的一切元素的点击事件都会冒泡到document
                    document.addEventListener('click', eventHandler)
                    // console.log('新增document监听器');
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