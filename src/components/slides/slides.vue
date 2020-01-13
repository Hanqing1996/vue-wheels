<template>
    <div class="g-slides">
        <div class="window">
            <div  ref="container" class="g-slides-inner" style="width: 100px">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelSlides",
        mounted() {
            setTimeout(()=>{
                this.$refs.container.style.transform='translateX(-200px)';
            },3000)
        }
    }
</script>


<style lang="scss" scoped>
    .g-slides-inner {
        display: flex;
        transition: all 1s;
    }
    .g-slides-inner >*{
        width: 100%;
        flex-shrink: 0;
    }
    .g-slides .window{
        overflow: hidden;
    }
    .g-slides{
        display: inline-block;
    }
</style>