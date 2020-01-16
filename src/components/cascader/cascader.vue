<template>
    <div class="cascader" ref="cascader" v-click-outside="closePopover">
        <div class="trigger" @click="onclickTrigger" ref="triggerWrapper">
            {{popoverContent}}
        </div>
        <div v-show="popoverVisible" ref="contentWrapper">
            <CascaderItems :items="source" :selected="selected"　@update:selected="onUpdate($event)"></CascaderItems>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'
    import clickOutside from '../../clickOutside'

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
            closePopover(){
                this.popoverVisible=false
                // popover关闭后,应该清空selected
                this.$emit('update:closeSelected')
            },
            openPopover(){
                this.popoverVisible=true
            },
            onclickTrigger(){

                if(this.popoverVisible==false){
                    this.openPopover()
                }else{
                    this.closePopover()
                }
            },
            onUpdate(newSelected){
                this.$emit('update:selected',newSelected)
            }
        },
        directives:{clickOutside},
        computed:{
            popoverContent:function () {
                return this.selected.map((item)=>item.name).join('-')
            }
        }
    }
</script>

<style lang="scss" scoped>
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