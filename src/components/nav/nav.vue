<template>
    <div class="g-nav">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "WheelsNav",
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
            updateSelected(name) {
                let copy = []
                if(this.multiple){
                    copy = this.selected
                    copy.push(name)
                } else{
                    copy.push(name)
                }
                this.$emit('update:selected', copy)

                // 保证nav.selected更新后才更新各个item的selected
                setTimeout(()=>{
                    this.items.forEach(vm => {
                        vm.selected = this.selected.indexOf(vm.name) >= 0
                    })
                })
            }
        },
        mounted() {
            this.items.forEach(vm => {
                vm.$on('add:selected', (name)=>{this.updateSelected(name)})
                vm.selected = this.selected.indexOf(vm.name) >= 0
            })
        },
        computed: {
            items() {
                return this.$children.filter(vm => vm.$options.name === 'WheelsNavItem')
            }
        }
    }
</script>

<style scoped>
    .g-nav {
        display: flex;
        flex-direction: row;
        border: 1px solid red;
    }
</style>