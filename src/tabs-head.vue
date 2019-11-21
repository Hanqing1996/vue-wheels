<template>
    <div class="tabs-head">
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
                this.x=true
                let {width,height,top,left}=vm.$el.getBoundingClientRect()
                this.$refs.line.style.width=`${width}px`
                this.$refs.line.style.left=`${left}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        border: 1px solid red;
        position: relative;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 3px solid $blue;
            /*控制line平滑移动*/
            transition: all 1s;
        }
        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>