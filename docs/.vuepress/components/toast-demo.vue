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
                <div>
                    <pre><code>{{codeStr}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GButton from '../../../src/components/button/button'
    import plugin from '../../../src/toastPlugin'
    import Vue from 'vue'

    Vue.use(plugin)

    export default {
        name: "toast-demo",
        components: {GButton},
        data() {
            return {
                codeStr: `
<div id="toastBlock"></div>
<g-button v-on:click.native="showToast">showToast</g-button>
`,
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