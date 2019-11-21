<template>
    <div class="tabs-item"　@click="xxx" :class="itemClasses">
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
                if(this.disabled){
                    return
                }
                this.eventBus.$emit('update:selected',this.name,this)
            }
        },
        computed:{
            itemClasses(){
                return {
                    active:this.active,
                    disabled: this.disabled
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $blue:blue;
    $disabled-text-color:grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color:$blue;
            font-weight: bold;
        }
        /*禁用样式*/
        &.disabled{
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>