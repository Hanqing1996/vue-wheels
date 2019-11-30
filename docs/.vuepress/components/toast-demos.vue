<template>
    <div>
        <div id="toastBlock"></div>
        <g-button v-on:click.native="showToast">showToast</g-button>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import plugin from '../../../src/plugin'
    import Vue from 'vue'


    Vue.use(plugin)

    export default {
        components: {
            'g-button': Button
        },
        data() {
            return {
                content: `
                <div id="toastBlock"></div>
                <g-button v-on:click.native="showToast">showToast</g-button>
                `
            }
        },
        methods: {
            showToast() {
                // $toast()参数由用户自定义，$toast的具体定义见plugin.js
                this.$toast('这是<strong style="color: blue">toast</strong>信息',
                    {
                        // 用户选择开启“向slot中填入HTML"
                        enableHTML: true,
                        autoClose: 1000,// 1000秒，方便测试
                        closeButton: {
                            text: '知道了',
                            // 这里的toast是plugin.js里的createToast函数内的toast
                            callback: (toast) => {
                                console.log('用户说他知道了')
                                toast.log()
                            }
                        },
                        position: 'top'
                    })
            }
        }
    }
</script>

<style scoped>

</style>