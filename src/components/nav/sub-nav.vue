<template>
    <div class="g-sub-nav">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="g-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelsSubNav",
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data() {
            return {
                open: false
            }
        },
        methods: {
            onClick() {
                this.open = !this.open
            },
            x(){
                console.log('x');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/var";

    .g-sub-nav {
        position: relative;

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