<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div class="slidesClass">
                <g-slides :selected.sync="sliderSelected" :autoPlay="true">
                    <g-slides-item name="1">
                        <div class="box">1</div>
                    </g-slides-item>
                    <g-slides-item name="2">
                        <div class="box">2</div>
                    </g-slides-item>
                    <g-slides-item name="3">
                        <div class="box">3</div>
                    </g-slides-item>
                    <g-slides-item name="4">
                        <div class="box">4</div>
                    </g-slides-item>
                    <g-slides-item name="5">
                        <div class="box">5</div>
                    </g-slides-item>
                </g-slides>
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
    </div>
</template>
<script>
    import GSlides from '../../../src/components/slides/slides'
    import GSlidesItem from '../../../src/components/slides/slides-item'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "slides-demo",
        mixins: [mixin],
        components: {GSlides, GSlidesItem,GIcon},
        data() {
            return {
                sliderSelected: '',
                codeStr: `
<g-slides :selected.sync="sliderSelected" :autoPlay="true">
    <g-slides-item name="1">
        <div class="box">1</div>
    </g-slides-item>
    <g-slides-item name="2">
        <div class="box">2</div>
    </g-slides-item>
    <g-slides-item name="3">
        <div class="box">3</div>
    </g-slides-item>
    <g-slides-item name="4">
        <div class="box">4</div>
    </g-slides-item>
    <g-slides-item name="5">
        <div class="box">5</div>
    </g-slides-item>
</g-slides>
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