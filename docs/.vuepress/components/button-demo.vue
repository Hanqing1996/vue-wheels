<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div class="component-wrapper">
                <g-button>默认按钮</g-button>
                <g-button icon="settings">带 icon 按钮</g-button>
                <g-button :loading="true">加载按钮</g-button>
                <g-button disabled>禁用按钮</g-button>
            </div>
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
</template>
<script>
    import GButton from '../../../src/components/button/button'
    import GButtonGroup from '../../../src/components/button/button-group'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "button-demo",
        mixins: [mixin],
        components: {
            GButton,
            GIcon,
            GButtonGroup
        },
        data() {
            return {
                codeStr: `
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
        `.replace(/^ {8}/gm, '').trim(),
            }
        }
    }
</script>

<style lang="scss">

</style>