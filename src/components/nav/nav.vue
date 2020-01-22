<template>
    <div class="g-nav">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "WheelsNav",
        provide() {
            return {
                root: this
            }
        },
        data(){
          return {
              items:[],
              namePath:[]
          }
        },
        props: {
            selected: {
                type: Array,
                default: () => []
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            addItem(vm) {
                this.items.push(vm)
            },
            updateSelected(name) {
                let copy = []
                if (this.multiple) {
                    copy = this.selected
                    copy.push(name)
                } else {
                    copy.push(name)
                }
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
                vm.$on('add:selected', (name) => {this.updateSelected(name)})
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
    }
</style>