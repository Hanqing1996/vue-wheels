<template>
    <div class="cascaderItems popover">
        <div class="label">
            <div class="left hh" v-for="item in items">
                <div  class="item" @click=onClickItem(item)>{{item.name}} <span class="symbol" v-if="ajax(item.id).length>0" >></span> </div>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems" :level="level+1"　:selected="selected" @update:selected="onUpdateSelected($event)"></cascader-items>
        </div>
    </div>
</template>

<script>
    import db from './db'

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

                // 被选中且有children，才显示右边
                if (this.selected[this.level]&&this.ajax(this.selected[this.level].id).length>0){
                    return this.ajax(this.selected[this.level].id)
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

                this.$emit('update:selected',copy)

            },
            onUpdateSelected(newSelected){
                this.$emit('update:selected',newSelected)
            },
            ajax(parentId=0){
                return db.filter(item=>item.parent_id===parentId)
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "var";
    .popover {
        display: flex;
        height: 200px;
        position: absolute;
        background-color: white;
        @extend .box-shadow;

        > .label {
            width: 100px;
            height: 100%;
            overflow: auto;
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
            >.right{
            }
        }
    }

    .symbol{
        font-size: 0.5em;
        margin-left:0.3em;
    }
</style>