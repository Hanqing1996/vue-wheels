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
                type: Array,
                default: () => []
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
                let copy = []
                copy.push(name)
                this.$emit('update:selected', copy)

                // 保证nav.selected更新后才更新各个item的selected
                setTimeout(() => {
                    this.items.forEach(vm => {
                        vm.selected = this.selected.indexOf(vm.name) >= 0
                    })
                })
            }
        },
        mounted() {
            this.items.forEach(vm => {
                vm.$on('add:selected', (name) => {
                    this.updateSelected(name)
                })
                vm.selected = this.selected.indexOf(vm.name) >= 0
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
            border: 1px solid red;
        }
    }
</style>