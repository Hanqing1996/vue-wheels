<template>
    <div class="g-nav-item" :class="{selected}" @click="onClick" v-click-outside="unselect">
        <slot></slot>
    </div>
</template>

<script>
    import clickOutside from '../../clickOutside'

    export default {
        name: "WheelsNavItem",
        inject:['root'],
        directives:{clickOutside},
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                selected: false
            }
        },
        methods: {
            unselect(){
                this.selected=false
            },
            // 注意"数据接口"不是nav-item
            onClick() {
                // 清空namePath,由于x的递归调用，保证了最后一级导航栏的item被点击后，总是能生成一条完整且正确的namePath
                this.root.namePath=[]
                this.$parent.updateNamePath&&this.$parent.updateNamePath()
                this.$emit('add:selected', this.name)
            }
        },
        created() {
            this.root.addItem(this)
        }
    }
</script>

<style lang="scss" scoped>
    .g-nav-item {
        padding: 10px 20px;
        position: relative;
        &.selected {
            &::after{
                content:'';
                position:absolute;
                left:0;
                bottom: 0px;
                border-bottom:1px solid blue;
                width:100%;
            }
        }
    }
</style>