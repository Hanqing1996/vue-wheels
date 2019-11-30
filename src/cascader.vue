<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div class="level-1"></div>
            <div class="level-2"></div>
            <div class="level-3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelCascader"
    }
</script>

<style scoped lang="scss">
    @import "var";

</style>