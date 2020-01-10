<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'WheelLayout',
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'WheelSider') {
                    this.hasSider = true
                }
            })
        },
        data() {
            return {
                hasSider: false
            }
        },
        computed: {
            layoutClass: function () {
                return [this.hasSider ? 'layoutHasSider' : '']
            }
        }

    }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        /*默认纵向布局*/
        flex-direction: column;
        border: 1px solid black;

        /*有sider则横向布局*/
        &.layoutHasSider {
            flex-direction: row;
        }
    }

</style>