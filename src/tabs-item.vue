<template>
    <div class="tabs-item"　@click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelTabsItem",
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
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
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected１',this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item{

    }
</style>