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
            <div>
                <pre><code>{{codeStr}}</code></pre>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import GSlides from '../../../src/components/slides/slides'
    import GSlidesItem from '../../../src/components/slides/slides-item'

    export default {
        name: "slides-demo",
        components: {GSlides, GSlidesItem},
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
`,
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