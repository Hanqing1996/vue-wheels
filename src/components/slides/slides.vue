<template>


    <div class="g-slides" @mouseenter="pause" @mouseleave="playAutomatically" @touchstart="onTouchStart"
         @touchmove="onTouchMove" @touchend="onTouchEnd">
        <div class="g-slides-window">
            <div ref="container" class="g-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="g-slides-dots">
            <span class="next" @click="select(selectedIndex-1)">
                <Icon name="left"></Icon>
            </span>
            <span v-for="(child,index) in $children" :class="{active:selectedIndex===index}" @click="select(index)">
                {{index+1}}
            </span>
            <span class="last" @click="select(selectedIndex+1)">
                <Icon name="right"></Icon>
            </span>
        </div>
    </div>
</template>

<script>
    import Icon from "../button/icon";

    export default {
        name: "WheelSlides",
        components: {Icon},
        data() {
            return {
                childrenNames: [],
                lastSelectedIndex: -1,
                timerId: undefined,
                startTouch: undefined,
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
            onTouchStart(e) {
                this.pause()
                // 多点touch（两个手指滑动，不予反应）
                if (e.touches.length > 1) {
                    return
                }
                this.startTouch = e.touches[0]
            },
            onTouchMove() {
            },
            onTouchEnd(e) {
                let endTouch = e.changedTouches[0]
                let {clientX: x1, clientY: y1} = this.startTouch
                let {clientX: x2, clientY: y2} = endTouch
                let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                let deltaY = Math.abs(y2 - y1)
                let rate = distance / deltaY
                // 偏移角度大于30度，才认为用户有左右滑动意图
                if (rate > 2) {
                    if (x2 > x1) {
                        this.select(this.selectedIndex - 1)
                    } else {
                        this.select(this.selectedIndex + 1)
                    }
                }
                this.$nextTick(() => {
                    this.playAutomatically()
                })
            },
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
                this.$children.filter(item=>item.$options.name==='WheelSlidesItem').forEach((item) => {
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

            this.childrenNames = this.$children.filter(item=>item.$options.name==='WheelSlidesItem').map(item => item.name)
            console.log(this.childrenNames);
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

    .g-slides-dots {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px;

        > span {
            display: inline-block;
            text-align: center;
            width: 1.2em;
            height: 1.2em;
            line-height: 1.2em;
            padding: auto 0;
            margin: 0.3em;
            border-radius: 50%;
            background: #4abf8a;

            &.active {
                background-color: red;
            }
            &.next,&.last{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>