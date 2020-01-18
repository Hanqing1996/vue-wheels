<template>
    <div class="collapse" >
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "WheelCollapse",
        props:{
          single:{
              type:Boolean,
              default:false
          },
          selected:{
              type:String,
              default: "1"
          }
        },
        data(){
            return{
                eventBus:new Vue()
            }
        },
        provide(){
            if(this.single){
                return{
                    eventBus:this.eventBus
                }
            }
        },
        created(){
            // 父组件更新子组件状态
            this.eventBus&&this.eventBus.$on('update:Selected',(name)=>{
                this.$children.forEach((vm) => {
                    vm.open=vm.name === name
                })
            })

            // 订阅子组件的状态更新请求
            this.eventBus&& this.eventBus.$on('change:Selected',(name)=>{
                this.eventBus.$emit('update:Selected',name)
            })
        },
        mounted() {
            // 设置默认选中项
            this.eventBus&&this.eventBus.$emit('update:Selected',this.selected)
        }
    }
</script>

<style lang="scss"　scoped>
    @import "src/var";
    .collapse{
        margin: 5px;
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>