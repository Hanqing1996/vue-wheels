<template>
    <div class="tabs-item"　@click="xxx" :class="{active}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelTabsItem",
        data(){
            return{
                active:false
            }
        },
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
            this.eventBus.$on('update:selected',(name)=>{
                this.active=name === this.name
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $blue:blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        border: 1px solid green;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color:$blue;
            font-weight: bold;
        }
    }
</style>