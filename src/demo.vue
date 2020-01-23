<template>
    <div>
        <g-pager :total-page="20" :current-page="5"></g-pager>
    </div>
</template>

<script>
    import GPager from "./components/pager/pager";

    export default {
        name: "demo",
        components: {GPager},
        data() {
            return {

            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
</style>