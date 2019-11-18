<template>
    <div class="toast" :class="toastClasses">

        <slot v-if="!enableHTML"></slot>
        <div v-else="enableHTML" v-html="$slots.default[0]"></div>

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
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: 5,
                validator: function (value) {
                    return (value===false|| typeof value === 'number')
                }
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            // 是否允许向toast的slot中插入HTML内容（这是一种危险的行为）
            enableHTML: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    // 出于浏览器兼容性考虑，不用 include
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.execAutoClose()
        },
        methods: {
            // autoClose秒后自动关闭toast
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },

            // 关闭 toast(彻底销毁 DOM 元素和 vue 实例)
            close() {
                // this.$destroy()不会把this.$el从文档中移除
                this.$el.remove()
                this.$emit('beforeClose')
                this.$destroy()
            },
            // autoClose秒内如果closeButton被点击，则执行callback函数
            onClickClose() {
                this.close() //关闭toast
                // 避免用户未传入closeButton及callback
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this) //执行closeButton的callback函数
                }
            },
            log() {
                console.log('测试callbak的回传功能');
            }
        },
        computed: {
            toastClasses: function () {
                return [`position-${this.position}`]
            }
        },
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        height: $toast-height;
        line-height: 1.8;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        color: white;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        padding: 0 16px;
        &.position-bottom{
            bottom: 0;
        }
        &.position-top{
            top: 0;
        }
        &.position-middle{
            top: 50%;
        }

    }

    .close {
        padding-left: 16px;
    }

    .line {
        height: 100%;
        margin-left: 10px;
        border-left: 1px solid #666;
    }
</style>