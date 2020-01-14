<template>
    <div class="g-slides" @mouseenter="pause" @mouseleave="playAutomatically">
        <div class="g-slides-window">
            <div ref="container" class="g-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="g-slides-dots">
            <span v-for="(child,index) in $children" :class="{active:selectedIndex===index}" @click="select(index)">
                {{index}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelSlides",
        data() {
            return {
                childrenNames: [],
                lastSelectedIndex: -1,
                timerId: undefined
            }
        },
        props: {
            selected: {
                type: String
            },
            autoPlay: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            pause() {
                window.clearTimeout(this.timerId)
                this.timerId = undefined
            },
            // 0=>2: this.lastIndex=0   childrenNames.indexOf(this.selected)=2
            select(index) {
                this.lastSelectedIndex = this.selectedIndex// 更新lastSelectedIndex
                this.$emit('update:selected', this.childrenNames[index])
            },
            updateChildren() {
                // 与其修改props的默认值，不如修改参数的默认值
                let selected = this.selected || this.$children[0].name
                // 必须通过demo.vue来更新selected
                this.$emit('update:selected', selected)
                this.$children.forEach((item) => {
                    item.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                    this.$nextTick(() => {
                        item.selected = selected
                    })
                })
            },
            playAutomatically() {
                // 仍然有动画，则
                if (this.timerId) {
                }
                const num = this.childrenNames.length
                let run = () => {
                    let index = this.selectedIndex
                    this.select((index + 1) % num)
                    this.timerId = setTimeout(run, 3000)
                }
                this.timerId = setTimeout(run, 3000)
            }
        },
        computed: {
            selectedIndex: function () {
                let index = 0
                if (this.childrenNames.indexOf(this.selected) === -1)
                    index = 0
                else
                    index = this.childrenNames.indexOf(this.selected)
                return index
            }
        },
        mounted() {

            this.childrenNames = this.$children.map(item => item.name)
            this.updateChildren()
            if (this.autoPlay)
                this.playAutomatically()
        },
        //mounted只执行一次，所以update的操作不应该在mounted里面执行
        updated() {
            this.updateChildren()
        }
    }
</script>


<style lang="scss" scoped>
    .g-slides {
        display: inline-block;
    }

    .g-slides-inner {
        display: flex;
    }

    .g-slides-wrapper {
        position: relative;
    }

    .active {
        background-color: red;
    }
</style>