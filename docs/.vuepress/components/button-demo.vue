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
            <div>
                <div>
                    <pre><code>{{codeStr}}</code></pre>
                </div>
            </div>
        </div>

        <h2>按钮组</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-button-group>
                    <g-button icon="left">
                        上一页
                    </g-button>
                    <g-button>
                        更多
                    </g-button>
                    <g-button icon="right">
                        下一页
                    </g-button>
                </g-button-group>
            </div>
            <div>
                <p>
                    <strong>代码</strong>
                </p>
                <div>
                    <pre><code class="html">{{codeStr2}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GButton from '../../../src/components/button/button'
    import GButtonGroup from '../../../src/components/button/button-group'
    import GIcon from '../../../src/components/button/icon'

    export default {
        name: "button-demo",
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
        `,

                codeStr2: `
<g-button-group>
    <g-button icon="left">
    上一页
    </g-button>
    <g-button>
    更多
    </g-button>
    <g-button icon="right">
    下一页
    </g-button>
</g-button-group>
          `
            }
        }
    }
</script>

<style lang="scss">

</style>