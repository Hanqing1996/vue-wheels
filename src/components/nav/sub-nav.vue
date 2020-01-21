<template>
    <div class="g-sub-nav" :class="{active}" v-click-outside="closePopover">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="g-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import clickOutside from '../../clickOutside'

    export default {
        name: "WheelsSubNav",
        inject:['root'],
        directives:{clickOutside},
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data() {
            return {
                open: false,
                active:false
            }
        },
        methods: {
            closePopover(){
                this.active=false
                this.open=false
            },
            onClick() {
                this.open = !this.open
            },
            updateNamePath(){
                // 记录sub-nav路径
                this.active=true
                this.root.namePath.unshift(this.name)
                if(this.$parent.updateNamePath){
                    this.$parent.updateNamePath()
                }
            }
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

        > span {
            padding: 10px 20px;
            display: inline-block;
            vertical-align: top;
        }

        > .g-sub-nav-popover {
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
        }
    }

    .g-sub-nav {
        > .g-sub-nav-popover {
            > .g-sub-nav {
                .g-sub-nav-popover {
                    top: 0%;
                    left: 100%;
                    margin-left: 8px;
                    min-width: 6em;
                }
            }
        }
    }
</style>