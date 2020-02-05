<template>
    <div class="stickyWrapper" ref="wrapper" :style="{height:`${height}px`}">
        <div class="g-sticky" style="border:1px solid red" ref="sticky" :class="{sticky}" :style="{left:`${left}px`,width:`${width}px`}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelSticky",
        props:{
          distance:{
              type:Number,
              required:true
          }
        },
        data() {
            return {
                sticky: false,
                left:undefined,
                width:undefined,
                height:undefined
            }
        },
        mounted() {
            let {height,width,left,top} = this.$refs.sticky.getBoundingClientRect();
            this.height=height;
            this.width=width;
            this.left=left;
            this.top=top;

            // 初始 top
            let initialTop = this.top;

            // initialTop 必须大于 distance
            let triggerDistance = initialTop - this.distance;

            this.onWindowScroll=()=>{
                let {top:currentTop}=this.$refs.sticky.getBoundingClientRect();
                if (currentTop< this.distance) {
                    this.sticky = true;
                    this.$refs.sticky.style.top = `${this.distance}px`
                } else if (currentTop== this.distance) {
                    if (this.sticky && window.scrollY < triggerDistance) {
                        this.sticky = false
                    }
                }
            }

            window.addEventListener('scroll', this.onWindowScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll',this.onWindowScroll)
        }
    }
</script>

<style lang="scss" scoped>
    .stickyWrapper {
        > .g-sticky {
            &.sticky {
                border: 1px solid red;
                position: fixed;
            }
        }
    }
</style>