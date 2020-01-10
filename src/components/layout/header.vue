<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelHeader"
    }
</script>

<style scoped lang="scss">
    .header{
        background: #999;
        height: 100px;
    }
</style>