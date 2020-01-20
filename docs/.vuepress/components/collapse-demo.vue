<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-collapse :single="false" 　selected="1">
                    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
                    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
                    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
                </g-collapse>
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
        <h2>手风琴效果（展开某项时折叠其他项）</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-collapse :single="true" 　selected="1">
                    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
                    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
                    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
                </g-collapse>
            </div>
            <div>
                <p>
                    <strong>代码</strong>
                </p>
                <div>
                    <pre><code>{{codeStr2}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GCollapse from '../../../src/components/collapse/collapse'
    import GCollapseItem from '../../../src/components/collapse/collapse-item'

    export default {
        name: "collapse-demo",
        components: {GCollapse,GCollapseItem},
        data() {
            return {
                codeStr: `
<g-collapse :single="false" 　selected="2">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
`,
                codeStr2: `
<g-collapse :single="true" 　selected="2">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
`,
            }
        }
    }
</script>

<style lang="scss">
</style>