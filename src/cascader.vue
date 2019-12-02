<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div v-if="popoverVisible">
            <CascaderItems :items="source" :selected="selected"　@update:selected="onUpdate($event)"></CascaderItems>
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
            },
            selected:{
                type:Array,
                default:()=>[]
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        },
        methods:{
            onUpdate(newSelected){
                this.$emit('update:selected',newSelected)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader {
        position: relative;
        > .trigger {
            width: 100px;
            height: 32px;
            border: 1px solid red;
        }
    }

</style>