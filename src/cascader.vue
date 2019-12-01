<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source">
                <CascaderItems :sourceItem="item"></CascaderItems>
            </div>

<!--            <div class="level-1"></div>-->
<!--            <div class="level-2"></div>-->
<!--            <div class="level-3"></div>-->
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'

    export default {
        name: "WheelCascader",
        components:{CascaderItems},
        props:{
            source:{
                type:Array
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";

</style>