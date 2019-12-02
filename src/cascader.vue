<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <CascaderItems :items="source"></CascaderItems>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'

    export default {
        name: "WheelCascader",
        components: {CascaderItems},
        props: {
            source: {
                type: Array
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader {
        > .trigger {
            width: 100px;
            height: 32px;
            border: 1px solid red;
        }
    }

</style>