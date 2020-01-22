<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-layout>
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
                <div>
                    <pre><code>{{codeStr}}</code></pre>
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

    export default {
        name: "layout-demo",
        components: {
            GLayout,
            GHeader,
            GFooter,
            GContent,
            GSider
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
        `,
            }
        }
    }
</script>

<style lang="scss">
</style>