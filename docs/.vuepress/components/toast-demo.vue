<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <div id="toastBlock" style=""></div>
                <g-button v-on:click.native="showToast">showToast</g-button>
            </div>
            <div>
                <p>
                    <strong>代码</strong>
                </p>
                <div class="code-content" style="height: 0;">
                    <div class="code-content-height">
                        <pre><code class="html">{{codeStr}}</code></pre>
                    </div>
                </div>
                <div class="lock-code" @click="showCode(0)" ref="xxx">
                    <g-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></g-icon>
                    <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GButton from '../../../src/components/button/button'
    import plugin from '../../../src/toastPlugin'
    import mixin from '../mixin'
    import Vue from 'vue'

    Vue.use(plugin)

    export default {
        name: "toast-demo",
        mixins: [mixin],
        components: {GButton},
        data() {
            return {
                codeStr: `
<div id="toastBlock"></div>
<g-button v-on:click.native="showToast">showToast</g-button>
`.replace(/^ {8}/gm, '').trim()
            }
        },
        methods: {
            showToast() {
                this.$toast('这是<strong style="color: blue">toast</strong>信息',
                    {
                        // 用户选择开启“向slot中填入HTML"
                        enableHTML: true,
                        autoClose: 1000,// 1000秒，方便测试
                        closeButton: {
                            text: '知道了',
                            // 这里的toast是plugin.js里的createToast函数内的toast
                            callback: (toast) => {
                                toast.log()
                            }
                        },
                        position: 'top'
                    })
            }
        }
    }
</script>

<style lang="scss">
</style>