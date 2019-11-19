<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelTabsPane",
        props:{
            name:{
                type:[String,Number],
                required: true
            }

        },
        inject:['eventBus'],
        created() {
            this.eventBus.$on('update:selected１',(name)=>{
                console.log(this.name,name)
            })
        },
    }
</script>

<style scoped>
    .tabs-pane{

    }
</style>