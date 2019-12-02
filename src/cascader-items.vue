<template>
    <div class="cascaderItems popover">
        <div class="label">
            <div class="left" v-for="item in items">
                <div  class="item" @click="leftSelected=item">{{item.name}} <span class="symbol" v-if="item.children" >></span> </div>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems"></cascader-items>
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
            }
        },
        data() {
            return {
                leftSelected: null
            }
        },
        computed: {
            rightItems: function () {
                // leftSelected被选中且有children，才显示右边
                if (this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children
                } else {
                    // 不能是[],否则递归会栈溢出
                    return null
                }
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