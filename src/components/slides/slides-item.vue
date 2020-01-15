<template>
    <transition name="slide">
        <div class="slides-item" v-if="visible" :class="{reverse}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "WheelSlidesItem",
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data() {
            return {
                selected:undefined,
                reverse:false
            }
        },
        computed: {
            visible(){
                return this.name===this.selected
            }
        },
    }
</script>

<style lang="scss" scoped>
    /*过渡阶段，保持相对定位*/
    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
        position:relative;
    }

    /*要出现的时候，切换为绝对定位*/
    .slide-enter{
        transform: translateX(100%) scale(0.5);
        position: absolute;
        top:0;
        left:0
    }
    .slide-enter.reverse{
        transform: translateX(-100%) scale(0.5);
        position: absolute;
        top:0;
        left:0
    }

    /*要消失的时候，切换为绝对定位*/
    .slide-leave-to{
        transform: translateX(-100%) scale(0.5);
        position: absolute;
        top:0;
        left:0;
        opacity: 0;
    }
    .slide-leave-to.reverse{
        transform: translateX(100%) scale(0.5);
        position: absolute;
        top:0;
        left:0;
        opacity: 0;
    }
</style>