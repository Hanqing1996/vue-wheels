<template>
    <div class="g-slides">
        <div class="g-slides-window">
            <div ref="container" class="g-slides-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelSlides",
        props: {
            selected: {
                type: String
            },
            autoPlay:{
                type: Boolean,
                default:true
            }
        },
        methods: {
            updateChildren() {
                // 与其修改props的默认值，不如修改参数的默认值
                let selected = this.selected || this.$children[0].name
                this.$children.forEach((item) => {
                    item.selected = this.selected
                })
            }
        },
        mounted() {
            let childrenNum=this.autoPlay? this.$children.length:0
            this.$emit('play', childrenNum)
        },
        //mounted只执行一次，所以update的操作不应该在mounted里面执行
        updated() {
            this.updateChildren()
        }
    }
</script>


<style lang="scss" scoped>
    .g-slides {
        border: 1px solid black;
        display: inline-block;
    }

    .g-slides-inner {
        display: flex;
    }

    .g-slides-wrapper {
        position: relative;
    }
</style>