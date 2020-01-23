<template>
    <div class="g-nav" :class="{vertical}">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "WheelsNav",
        provide() {
            return {
                root: this
            }
        },
        data() {
            return {
                items: [],
                namePath: []
            }
        },
        props: {
            selected: {
                type: String
            },
            vertical:{
                type:Boolean,
                default:false
            }
        },
        methods: {
            addItem(vm) {
                this.items.push(vm)
            },
            updateSelected(name) {
                let copy=name
                this.$emit('update:selected', copy)

                // 保证nav.selected更新后才更新各个item的selected
                setTimeout(() => {
                    this.items.forEach(vm => {
                        vm.selected = this.selected===vm.name
                    })
                })
            }
        },
        mounted() {
            this.items.forEach(vm => {
                vm.$on('add:selected', (name) => {
                    this.updateSelected(name)
                })
                vm.selected = this.selected===vm.name
            })
        }
    }
</script>

<style lang="scss" scoped>
    .g-nav {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid red;
        user-select: none;
        &.vertical{
            flex-direction: column;
        }
    }
</style>