<template>
    <div class="g-nav-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelsNavItem",
        inject:['root'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                selected: false
            }
        },
        methods: {
            onClick() {
                this.$emit('add:selected', this.name)
                this.$parent.x()
            }
        },
        created() {
            this.root.addItem(this)
        }
    }
</script>

<style lang="scss" scoped>
    .g-nav-item {
        padding: 10px 20px;
        position: relative;
        &.selected {
            &::after{
                content:'';
                position:absolute;
                left:0;
                bottom: 0px;
                border-bottom:1px solid blue;
                width:100%;
            }
        }
    }
</style>