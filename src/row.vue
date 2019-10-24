<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'wheelRow',
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validate(value) {
                    return ['left', 'right', 'center'].includes(value)
                }
            }
        },
        computed: {
            rowStyle: function () {
                return {
                    marginLeft: -this.gutter / 2 + 'px',
                    marginRight: -this.gutter / 2 + 'px',
                }
            },
            rowClass: function () {
                return [this.align && `align-${this.align}`, this.align && `align-${this.align}`]
            }
        },

        mounted() {

            // 把父组件的 gutter 传递给子组件
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style scoped lang="scss">
    .row {
        display: flex;
        /*允许col分行*/
        flex-wrap: wrap;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-end;
        }
        &.align-center{
            justify-content: center;
        }
    }

</style>