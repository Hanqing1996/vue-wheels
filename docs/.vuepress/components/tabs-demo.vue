<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-tabs :selected.sync="selectedTab">
                    <g-tabs-head>
                        <template slot="actions">
                            <g-button>设置</g-button>
                        </template>
                        <g-tabs-item name="military">
                            <g-icon name="settings"></g-icon>
                            军事
                        </g-tabs-item>
                        <g-tabs-item name="finance" :disabled="true">
                            <g-icon name="settings"></g-icon>
                            财经
                        </g-tabs-item>
                        <g-tabs-item name="sports">
                            <g-icon name="settings"></g-icon>
                            体育
                        </g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="military">军事新闻</g-tabs-pane>
                        <g-tabs-pane name="finance">财经新闻</g-tabs-pane>
                        <g-tabs-pane name="sports">体育新闻</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>
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
    import GTabs from '../../../src/components/tabs/tabs'
    import GTabsHead from '../../../src/components/tabs/tabs-head'
    import GTabsBody from '../../../src/components/tabs/tabs-body'
    import GTabsItem from '../../../src/components/tabs/tabs-item'
    import GTabsPane from '../../../src/components/tabs/tabs-pane'

    import GButton from '../../../src/components/button/button'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "tabs-demo",
        mixins: [mixin],
        components: {GTabs, GTabsHead, GTabsBody, GTabsItem, GTabsPane,GButton, GIcon},
        data() {
            return {
                selectedTab: 'sports',
                codeStr: `
<g-tabs :selected.sync="selectedTab">
    <g-tabs-head>
        <template slot="actions">
            <g-button>设置</g-button>
        </template>
        <g-tabs-item name="military">
            <g-icon name="settings"></g-icon>
            &nbsp;军事
        </g-tabs-item>
        <g-tabs-item name="finance" :disabled="true">
            <g-icon name="settings"></g-icon>
            &nbsp;财经
        </g-tabs-item>
        <g-tabs-item name="sports">
            <g-icon name="settings"></g-icon>
            &nbsp;体育
        </g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="military">军事新闻</g-tabs-pane>
        <g-tabs-pane name="finance">财经新闻</g-tabs-pane>
        <g-tabs-pane name="sports">体育新闻</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
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