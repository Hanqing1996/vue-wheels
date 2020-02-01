<template>
    <div class="demo">
        <h2>水平导航栏</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-nav :selected.sync=selected1 >
                    <g-nav-item name="introduction"><a href="https://baidu.com">平台介绍</a></g-nav-item>
                    <g-sub-nav name="data">
                        <template slot="title" class="g-nav-item">数据接口</template>
                        <g-nav-item name="news">资讯数据</g-nav-item>
                        <g-nav-item name="industry">行业数据</g-nav-item>
                        <g-nav-item name="society">社会数据</g-nav-item>
                        <g-sub-nav name="monetary">
                            <template slot="title" class="g-nav-item">金融数据</template>
                            <g-nav-item name="bond">债券数据</g-nav-item>
                            <g-nav-item name="futures">期货数据</g-nav-item>
                            <g-sub-nav name="stock">
                                <template slot="title" class="g-nav-item">股票数据</template>
                                <g-nav-item name="american">美国股票</g-nav-item>
                                <g-nav-item name="chinese">中证500</g-nav-item>
                                <g-nav-item name="other">其他</g-nav-item>
                            </g-sub-nav>
                        </g-sub-nav>
                    </g-sub-nav>
                    <g-nav-item name="linkStyle">联系方式</g-nav-item>
                </g-nav>
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

        <h2>垂直导航栏</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-nav :selected.sync=selected2 vertical style="width: 200px">
                    <g-nav-item name="introduction"><a href="https://baidu.com">平台介绍</a></g-nav-item>
                    <g-sub-nav name="data">
                        <template slot="title" class="g-nav-item">数据接口</template>
                        <g-nav-item name="news">资讯数据</g-nav-item>
                        <g-nav-item name="industry">行业数据</g-nav-item>
                        <g-nav-item name="society">社会数据</g-nav-item>
                        <g-sub-nav name="monetary">
                            <template slot="title" class="g-nav-item">金融数据</template>
                            <g-nav-item name="bond">债券数据</g-nav-item>
                            <g-nav-item name="futures">期货数据</g-nav-item>
                            <g-sub-nav name="stock">
                                <template slot="title" class="g-nav-item">股票数据</template>
                                <g-nav-item name="american">美国股票</g-nav-item>
                                <g-nav-item name="chinese">中证500</g-nav-item>
                                <g-nav-item name="other">其他</g-nav-item>
                            </g-sub-nav>
                        </g-sub-nav>
                    </g-sub-nav>
                    <g-nav-item name="linkStyle">联系方式</g-nav-item>
                </g-nav>
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
    import GNav from '../../../src/components/nav/nav'
    import GNavItem from '../../../src/components/nav/nav-item'
    import GSubNav from '../../../src/components/nav/sub-nav'
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "nav-demo",
        mixins: [mixin],
        components: {GNav,GNavItem,GSubNav,GIcon},
        data() {
            return {
                selected1: 'linkStyle',
                selected2: 'linkStyle',
                codeStr: `
<g-nav :selected.sync=selected >
    <g-nav-item name="introduction"><a href="https://baidu.com">平台介绍</a></g-nav-item>
    <g-sub-nav name="data">
        <template slot="title" class="g-nav-item">数据接口</template>
        <g-nav-item name="news">资讯数据</g-nav-item>
        <g-nav-item name="industry">行业数据</g-nav-item>
        <g-nav-item name="society">社会数据</g-nav-item>
        <g-sub-nav name="monetary">
            <template slot="title" class="g-nav-item">金融数据</template>
            <g-nav-item name="bond">债券数据</g-nav-item>
            <g-nav-item name="futures">期货数据</g-nav-item>
            <g-sub-nav name="stock">
                <template slot="title" class="g-nav-item">股票数据</template>
                <g-nav-item name="american">美国股票</g-nav-item>
                <g-nav-item name="chinese">中证500</g-nav-item>
                <g-nav-item name="other">其他</g-nav-item>
            </g-sub-nav>
        </g-sub-nav>
    </g-sub-nav>
    <g-nav-item name="linkStyle">联系方式</g-nav-item>
</g-nav>
`.replace(/^ {8}/gm, '').trim(),
                codeStr2:`
<g-nav :selected.sync=selected2 vertical style="width: 200px">
    <g-nav-item name="introduction"><a href="https://baidu.com">平台介绍</a></g-nav-item>
    <g-sub-nav name="data">
        <template slot="title" class="g-nav-item">数据接口</template>
        <g-nav-item name="news">资讯数据</g-nav-item>
        <g-nav-item name="industry">行业数据</g-nav-item>
        <g-nav-item name="society">社会数据</g-nav-item>
        <g-sub-nav name="monetary">
            <template slot="title" class="g-nav-item">金融数据</template>
            <g-nav-item name="bond">债券数据</g-nav-item>
            <g-nav-item name="futures">期货数据</g-nav-item>
            <g-sub-nav name="stock">
                <template slot="title" class="g-nav-item">股票数据</template>
                <g-nav-item name="american">美国股票</g-nav-item>
                <g-nav-item name="chinese">中证500</g-nav-item>
                <g-nav-item name="other">其他</g-nav-item>
            </g-sub-nav>
        </g-sub-nav>
    </g-sub-nav>
    <g-nav-item name="linkStyle">联系方式</g-nav-item>
</g-nav>`.replace(/^ {8}/gm, '').trim(),
            }
        },
    }
</script>

<style lang="scss">
</style>