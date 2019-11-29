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

        mounted() {
            this.$children.forEach((vm) => {
                if (vm.name === this.selected) {
                    vm.open=true
                }
            })
        }
    }
</script>

<style lang="scss"　scoped>
    $grey:#ddd;
    $border-radius:4px;
    .collapse{
        margin: 5px;
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>