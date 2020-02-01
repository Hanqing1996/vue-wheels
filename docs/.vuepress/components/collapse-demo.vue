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
                <div class="code-content" style="height: 0;">
                    <div class="code-content-height">
                        <pre><code class="html">{{codeStr}}</code></pre>
                    </div>
                </div>
                <div class="lock-code" @click="showCode(0)" ref="xxx">
                    <g-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></g-icon>
                </div>
            </div>
        </div>
        <h2>手风琴效果</h2>
        <div>展开某项时折叠其他项</div>
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
                <div class="code-content" style="height: 0;">
                    <div class="code-content-height">
                        <pre><code class="html">{{codeStr2}}</code></pre>
                    </div>
                </div>
                <div class="lock-code" @click="showCode(1)" ref="xxx">
                    <g-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></g-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GCollapse from '../../../src/components/collapse/collapse'
    import GCollapseItem from '../../../src/components/collapse/collapse-item'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "collapse-demo",
        mixins: [mixin],
        components: {GCollapse,GCollapseItem,GIcon},
        data() {
            return {
                codeStr: `
<g-collapse :single="false" 　selected="2">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
`.replace(/^ {8}/gm, '').trim(),
                codeStr2: `
<g-collapse :single="true" 　selected="2">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
`.replace(/^ {8}/gm, '').trim(),
            }
        }
    }
</script>

<style lang="scss">
</style>