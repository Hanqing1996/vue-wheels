<template>
    <div class="cascaderItems popover">
        <div class="label left">
            <div class="left" v-for="item in items">
                <div @click="leftSelected=item">{{item.name}}</div>
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
                    console.log('rightItems产生');
                    return this.leftSelected.children
                } else {
                    return null
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .popover {
        display: flex;
        > .label {
            width: 80px;
            border: 1px solid blue;
        }
    }

</style>