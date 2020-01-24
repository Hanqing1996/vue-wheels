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
                <div>
                    <pre><code>{{codeStr}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GPager from '../../../src/components/pager/pager'

    export default {
        name: "pager-demo",
        components: {GPager},
        data() {
            return {
                currentPage: 5,
                codeStr: `
<g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
`,
            }
        }
    }
</script>

<style lang="scss">
</style>