<template>
    <div class="demo">
        <h2>基础用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div class="component-wrapper">
                <g-input value="value"></g-input>
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

        <h2>特殊状态</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div class="component-wrapper">
                <g-input value="disabled" disabled></g-input>
                <g-input value="readonly" readonly></g-input>
                <g-input value="" error="errorInfo"></g-input>
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
                    <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GInput from '../../../src/components/input/input'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "input-demo",
        mixins: [mixin],
        components: {GInput,GIcon},
        data() {
            return {
                value: '100',
                codeStr: `
<g-input></g-input>
        `.replace(/^ {8}/gm, '').trim(),
                codeStr2: `
<g-input value="disabled" disabled></g-input>
<g-input value="readonly" readonly></g-input>
<g-input value="" error="errorInfo"></g-input>
        `.replace(/^ {8}/gm, '').trim(),
            }
        }
    }
</script>