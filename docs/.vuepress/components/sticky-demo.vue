<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <g-sticky :distance="50">
                <div style="text-align: center">粘滞内容</div>
            </g-sticky>
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
    import GSticky from '../../../src/components/sticky/sticky'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "sticky-demo",
        mixins: [mixin],
        components: {GSticky,GIcon},
        data() {
            return {
                codeStr: `
<g-sticky :distance="50">
    <div style="text-align: center">粘滞内容</div>
</g-sticky>
`.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>

<style lang="scss">
    .slidesClass {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .box {
        height: 200px;
        width: 350px;
        background: #ddd;
        text-align: center;
        line-height: 200px;
    }
</style>