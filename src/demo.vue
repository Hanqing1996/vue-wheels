<template>
    <div>
        <g-nav :selected.sync=selected multiline="false">
            <g-nav-item name="introduction">平台介绍</g-nav-item>
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
</template>

<script>
    import GNav from "./components/nav/nav";
    import GNavItem from "./components/nav/nav-item";
    import GSubNav from "./components/nav/sub-nav";

    export default {
        name: "demo",
        components: {GNav, GNavItem, GSubNav},
        selected: '',
        data() {
            return {
                selected: ['home']
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
</style>