<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
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
    import GPager from '../../../src/components/pager/pager'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "pager-demo",
        mixins: [mixin],
        components: {GPager,GIcon},
        data() {
            return {
                currentPage: 5,
                codeStr: `
<g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
`.replace(/^ {8}/gm, '').trim(),
            }
        }
    }
</script>

<style lang="scss">
</style>