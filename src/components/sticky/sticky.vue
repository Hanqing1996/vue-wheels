<template>
    <div class="stickyWrapper" ref="wrapper">
        <div class="g-sticky" style="border:1px solid red" ref="sticky" :class="{sticky}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelSticky",
        data() {
            return {
                sticky: false
            }
        },
        mounted() {

            this.$refs.wrapper.style.height = `${this.height()}px`

            // 初始 top
            let initialTop = this.top()

            // initialTop 必须大于200
            let triggerDistance = initialTop - 0

            window.addEventListener('scroll', () => {
                if (this.top() < 0) {
                    this.sticky = true
                    this.$refs.sticky.style.top = '0px'
                } else if (this.top() == 0) {
                    if (this.sticky && window.scrollY < triggerDistance) {
                        this.sticky = false
                    }
                }
            })
        },
        methods: {
            top() {
                let {top} = this.$refs.sticky.getBoundingClientRect()
                return top
            },
            height() {
                let {height} = this.$refs.sticky.getBoundingClientRect()
                return height
            }
        }
    }
</script>

<style lang="scss" scoped>
    .stickyWrapper {
        > .g-sticky {
            &.sticky {
                border: 1px solid red;
                position: fixed;
                left: 0;
                width: 100%;
            }
        }
    }
</style>