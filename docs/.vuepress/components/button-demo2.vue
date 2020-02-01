<template>
    <div class="demo">
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
    import GButton from '../../../src/components/button/button'
    import GButtonGroup from '../../../src/components/button/button-group'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "button-demo2",
        mixins: [mixin],
        components: {
            GButton,
            GIcon,
            GButtonGroup
        },
        data() {
            return {
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
          `.replace(/^ {8}/gm, '').trim(),
            }
        }
    }
</script>

<style lang="scss">

</style>