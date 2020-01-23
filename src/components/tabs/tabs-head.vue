<template>
    <div class="tabs-head" ref="head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelTabsHead",
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(name,vm)=>{
                this.updateLinePosition(vm)
            })
        },
        methods:{
            updateLinePosition(selectedVm){
                let {width, left} = selectedVm.$el.getBoundingClientRect()
                let {left: left2} = this.$refs.head.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - left2}px`
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/var";
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 3px solid $blue;
            /*控制line平滑移动*/
            transition: all 1s;
        }
        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>