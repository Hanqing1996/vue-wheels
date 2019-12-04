<template>
    <div class="cascaderItems popover">
        <div class="label">
            <div class="left" v-for="item in items">
                <div  class="item" @click=onClickItem(item)>{{item.name}} <span class="symbol"  v-if="clickedWithChildId===item.id" >></span> </div>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems" :level="level+1"　:selected="selected" @update:selected="onUpdateSelected($event)"></cascader-items>
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

                // 被选中且有children，才显示右边
                if (this.selected[this.level]&&this.selected[this.level].children){
                    return this.selected[this.level].children
                } else {
                    // 不能是[],否则递归会栈溢出
                    return null
                }
            },
            // 这个计算属性的思路和rightItems一样，只有被点击且有children的选项才会显示symbol
            clickedWithChildId:function () {
                if(this.selected[this.level]&&this.selected[this.level].children){
                    return this.selected[this.level].id
                } else{
                    return -1
                }
            }
        },
        methods:{
            onClickItem(item){

                // 如果this.selected[this.level].children已存在,则重新在db中查找并替换(浙江->江苏)
                // 如果this.selected[this.level].children不存在,则在db中查找后添加children
                // 总之就是一定会根据所点击item的id在db中查找对应children然后重置children

                let len=this.selected.length
                let copy=JSON.parse(JSON.stringify(this.selected))

                copy[this.level]=JSON.parse(JSON.stringify(item))

                copy.splice(this.level+1,len-this.level-1)

                this.$emit('update:selected',copy)
            },
            onUpdateSelected(newSelected){
                this.$emit('update:selected',newSelected)
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
        }
    }

    .symbol{
        font-size: 0.5em;
        margin-left:0.3em;
    }
</style>