<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "WheelTabs",
        props: {
            selected: {
                type: String,
                required:true
            },
            direction:{
                type: String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        data(){
            return {
                // 一个vue实例
                eventBus:new Vue()
            }
        },
        // 提供EventBus(事件中心)
        provide(){
          return{
              eventBus:this.eventBus
          }
        },
        mounted() {
            if(this.$children.length==0) {
                console&&console.warn&& console.warn('tabs的子组件应该是tabs-head和tabs-body,但你没有写组件')
            }

            this.$children.forEach((vm)=>{
                if(vm.$options.name==="WheelTabsHead"){
                    vm.$children.forEach((childVm)=>{
                        if(childVm.$options.name=="WheelTabsItem"&&childVm.name==this.selected){
                            this.eventBus&&this.eventBus.$emit('update:selected', this.selected,childVm)
                        }
                    })
                }

            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs{

    }
</style>