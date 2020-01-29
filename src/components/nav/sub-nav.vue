<template>
    <div class="g-sub-nav" :class="{active,vertical}" v-click-outside="closePopover">
        <span @click="onClick" class="g-sub-nav-label">
            <span class="title">
                <slot name="title"></slot>
            </span>
            <span v-if="this.$parent.$options.name==='WheelsSubNav'" class="g-sub-nav-icon" :class="{open}">
                <Icon name="down" v-if="vertical"></Icon>
                <Icon name="right" v-else></Icon>
            </span>
        </span>
        <div class="g-sub-nav-popover" :class="{vertical}" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import clickOutside from '../../clickOutside'
    import Icon from '../button/icon'
    export default {
        name: "WheelsSubNav",
        inject: ['root'],
        components: {Icon},
        directives: {clickOutside},
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false,
                active: false,
                vertical: false
            }
        },
        methods: {
            closePopover() {
                this.active = false
                this.open = false
            },
            onClick() {
                this.open = !this.open
            },
            updateNamePath() {
                // 记录sub-nav路径
                this.active = true
                this.root.namePath.unshift(this.name)
                if (this.$parent.updateNamePath) {
                    this.$parent.updateNamePath()
                }
            }
        },
        mounted() {
            this.vertical = this.root.vertical
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/var";
    .g-sub-nav {
        position: relative;
        &.active {
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 1px solid $blue;
                width: 100%;
            }
        }
        &.vertical {
            &::after {
                display: none;
            }
        }
        > span {
            padding: 10px 20px;
            display: inline-block;
            vertical-align: top;
        }
        > .g-sub-nav-popover {
            background: white;
            margin-top: 1px;
            position: absolute;
            top: 100%;
            left: 0%;
            border: 1px solid white;
            white-space: nowrap;
            box-shadow: 0 0 3px fade_out(black, 0.8);
            border-radius: $border-radius;
            font-size: $font-size;
            min-width: 6em;
            > .g-nav-item {
                &.selected {
                    &::after {
                        display: none;
                    }
                    background-color: $grey;
                }
            }
            &.vertical {
                position: static;
                border: none;
                box-shadow: none;
                > .g-nav-item {
                    &.selected {
                        background-color: white;
                    }
                }
            }
            > .g-sub-nav {
                &.active {
                    &::after {
                        display: none;
                    }
                }
                > .g-sub-nav-popover {
                    top: 0%;
                    left: 100%;
                    margin-left: 8px;
                    min-width: 6em;
                }
            }
        }
    }
    .title {
        display: inline-block;
        min-width: 4em;
    }
    .g-sub-nav-label {
        position: relative;
        > .g-sub-nav-icon {
            transition: transform 250ms;
            position: absolute;
            top: 30%;
            right: 1%;
            &.open {
                transform: rotate(180deg);
                top: 23%;
            }
            > svg {
                width: 16px;
                height: 16px;
            }
        }
    }
</style>