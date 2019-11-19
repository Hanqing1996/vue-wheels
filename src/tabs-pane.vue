<template>
    <div class="tabs-pane" :class="{active}"　v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelTabsPane",
        data(){
            return{
                active:false
            }
        },
        props: {
            name: {
                type: [String, Number],
                required: true
            }
        },
        inject: ['eventBus'],
        created: function () {
            this.eventBus.$on('update:selected', (name) => {
                this.active=name === this.name
            })
        },
        computed:{
            paneClass:function () {
                return
            }
        }
    }
</script>

<style lang="scss" 　scoped>
    .tabs-pane {
        &.active {
            background: red;
        }
    }
</style>