<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelFooter"
    }
</script>

<style scoped lang="scss">
    .footer{
        background: #ccc;
        height: 50px;
    }
</style>