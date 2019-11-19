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
        created() {
            // this.eventBus.$emit('update:selected','hihi')
        }

    }
</script>

<style lang="scss" scoped>
    .tabs{

    }
</style>