<template>

    <transition name="slide">
        <div class="sider":class="siderClass" v-if="visible">
            <!--这个click不需要在index.html中设置相应事件哦-->
            <button @click="visible=false">hide</button>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "WheelSider",
        data(){
          return {
              visible:true
          }
        },
        methods:{
        },
        computed: {
            siderClass: function () {
                return []
            }
        }


    }
</script>

<style scoped lang="scss">
    .sider{
        /*浮动布局*/
        position: relative;
        > button{
            position: absolute;
            top:0;
            right:0;
        }
    }

    /*时长*/
    .slide-enter-active,.slide-leave-active {
        transition: all .5s
    }

    /*结束状态*/
    .slide-enter,.slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
        margin-left: -200px;
    }
</style>