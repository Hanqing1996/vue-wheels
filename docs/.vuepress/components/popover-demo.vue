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
                <div>
                    <pre><code>{{codeStr}}</code></pre>
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
                <div>
                    <pre><code>{{codeStr}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import GPopover from '../../../src/components/popover/popover'
    import GButton from '../../../src/components/button/button'

    export default {
        name: "popover-demo",
        components: {GPopover, GButton},
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
`,
                codeStr2:`
<g-popover position="top" 　trigger="hover">
    <template slot="content">
        <div class="text">tell you something</div>
    </template>
    <g-button  style="margin-top: 30px">点我获得something</g-button>
</g-popover>
                `
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