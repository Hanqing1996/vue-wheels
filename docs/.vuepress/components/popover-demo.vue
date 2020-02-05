<template>
    <div class="demo">
        <h2>click 触发</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-popover position="top">
                    <template slot="content" slot-scope="{close}">
                        <div class="text">give you anything　
                            <g-button v-on:click.native="close">close</g-button>
                        </div>
                    </template>
                    <g-button style="margin-top: 70px">点我获得anything</g-button>
                </g-popover>
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
        <h2>hover 触发</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-popover position="top" 　trigger="hover">
                    <template slot="content">
                        <div class="text">tell you something</div>
                    </template>
                    <g-button  style="margin-top: 30px">点我获得something</g-button>
                </g-popover>
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
    import GPopover from '../../../src/components/popover/popover'
    import GButton from '../../../src/components/button/button'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "popover-demo",
        mixins: [mixin],
        components: {GPopover, GButton,GIcon},
        data() {
            return {
                codeStr: `
<g-popover position="top">
    <template slot="content" slot-scope="{close}">
        <div class="text">give you anything　
            <g-button v-on:click.native="close">close</g-button>
        </div>
    </template>
    <g-button style="margin-top: 70px">点我获得anything</g-button>
</g-popover>
`.replace(/^ {8}/gm, '').trim(),
                codeStr2:`
<g-popover position="top" 　trigger="hover">
    <template slot="content">
        <div class="text">tell you something</div>
    </template>
    <g-button  style="margin-top: 30px">点我获得something</g-button>
</g-popover>
`.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>

<style lang="scss">
    .text{font-size:20px; border: 1px solid black;display: inline-block;padding: 5px;
        position: relative;
        max-width: 100px;
        word-break: break-all}
    .text::before,.text::after{
        content: '';
        display: block;
        border: 10px solid transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 10px;
    }
    .text::before{
        border-top-color: black;
        top: 100%;
    }
    .text::after{
        border-top-color: white;
        top: calc(100% - 1px);
    }
</style>