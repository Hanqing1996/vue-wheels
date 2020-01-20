<template>
    <div>
        <g-nav :selected.sync=selected multiline="false">
            <g-nav-item name="introduction">平台介绍</g-nav-item>
            <g-nav-item name="interface">数据接口</g-nav-item>
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

<style scoped>

</style>