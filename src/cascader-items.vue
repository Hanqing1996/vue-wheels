<template>
    <div class="cascaderItems popover">
<!--        <div>-->
<!--            selected:{{selected}}-->
<!--            level:{{level}}-->
<!--        </div>-->
<!--        {{selected}}-->
        <div class="label">
            <div class="left" v-for="item in items">
                <div  class="item" @click=onClickItem(item)>{{item.name}} <span class="symbol" v-if="item.children" >></span> </div>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems" :level="level+1"　:selected="selected" @update:selectedRight="onUpdateSelected($event)"></cascader-items>
        </div>
    </div>
</template>

<script>
    // 递归调用
    export default {
        name: "CascaderItems",
        props: {
            items: {
                type: Array
            },
            selected:{
                type:Array,
                default:()=>[]
            },
            level:{
                type:Number,
                default:0
            }
        },
        computed: {
            rightItems: function () {

                // leftSelected被选中且有children，才显示右边
                if (this.selected[this.level] && this.selected[this.level].children) {
                    return this.selected[this.level].children
                } else {
                    // 不能是[],否则递归会栈溢出
                    return null
                }
            }
        },
        methods:{
            onClickItem(item){
                let len=this.selected.length
                let copy=JSON.parse(JSON.stringify(this.selected))
                copy[this.level]=item
                // 假如level=1,则重置selected[1]后,将selected[2],selected[3]都清除
                copy.splice(this.level+1,len-this.level-1)

                //　触发cascader.vue的update:selectedRight
                this.$emit('update:selected',copy)
                // 触发递归父组件的update:selectedRight
                this.$emit('update:selectedRight',copy)

            },
            onUpdateSelected(newSelected){
                //　触发cascader.vue的update:selectedRight
                this.$emit('update:selected',newSelected)
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "var";
    .popover {
        display: flex;
        height: 100px;
        position: absolute;
        background-color: white;
        @extend .box-shadow;

        > .label {
            width: 55px;
            /*border: 1px solid blue;*/
            height: 100%;
            >.left {
                display: flex;
                flex-direction: column;
                align-items: center;
                >.item{
                    display: inline-flex;
                    flex-direction: row;
                    align-items: center;

                }
            }
        }
    }

    .symbol{
        font-size: 0.5em;
        margin-left:0.3em;
    }
</style>