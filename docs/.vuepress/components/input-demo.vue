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
                <div>
                    <pre><code>{{codeStr}}</code></pre>
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
                <div>
                    <pre><code>{{codeStr2}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GInput from '../../../src/components/input/input'

    export default {
        name: "input-demo",
        components: {GInput},
        data() {
            return {
                value: '100',
                codeStr: `
<g-input></g-input>
        `,
                codeStr2: `
<g-input value="disabled" disabled></g-input>
<g-input value="readonly" readonly></g-input>
<g-input value="" error="errorInfo"></g-input>
        `
            }
        }
    }
</script>