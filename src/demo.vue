<template>
    <div>
        <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
    </div>
</template>

<script>
    import GPager from "./components/pager/pager";

    export default {
        name: "demo",
        components: {GPager},
        data() {
            return {
                currentPage:5
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
</style>