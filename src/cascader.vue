<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            {{popoverContent}}
        </div>
        <div v-if="popoverVisible">
            <CascaderItems :items="source" :selected="selected"　@update:selected2="onUpdate($event)"></CascaderItems>
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
            },
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
        },
        computed:{
            popoverContent:function () {
                return this.selected.map((item)=>item.name).join('-')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader {
        position: relative;
        > .trigger {
            width: 130px;
            border: 1px solid black;
            min-height: 27px;
            line-height: 27px;
            padding:auto 0;
            text-align: center;
        }
    }
</style>