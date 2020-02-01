<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-layout style="overflow:hidden;">
                    <g-sider class="demo">sider</g-sider>
                    <g-layout>
                        <g-header class="demo">header</g-header>
                        <g-content class="demo" style="height: 348px">content</g-content>
                        <g-footer class="demo">footer</g-footer>
                    </g-layout>
                </g-layout>
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
    import GLayout from '../../../src/components/layout/layout'
    import GHeader from '../../../src/components/layout/header'
    import GFooter from '../../../src/components/layout/footer'
    import GContent from '../../../src/components/layout/content'
    import GSider from '../../../src/components/layout/sider'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "layout-demo",
        mixins: [mixin],
        components: {
            GLayout,
            GHeader,
            GFooter,
            GContent,
            GSider,
            GIcon
        },
        data() {
            return {
                codeStr: `
<g-layout style="overflow:hidden;">
    <g-sider class="demo">sider</g-sider>
    <g-layout>
        <g-header class="demo">header</g-header>
        <g-content class="demo" style="height: 348px">content</g-content>
        <g-footer class="demo">footer</g-footer>
    </g-layout>
</g-layout>
        `.replace(/^ {8}/gm, '').trim(),
            }
        }
    }
</script>

<style lang="scss">
</style>