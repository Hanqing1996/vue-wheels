<template>

    <transition name="slide">
        <div class="sider":class="siderClass" v-show="visible">
            <!--这个click不需要在index.html中设置相应事件哦-->
            <div class="hideButton" @click="hideSider">
                <g-button>hide</g-button>
            </div>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    import GButton from '../button/button'

    export default {
        name: "WheelSider",
        components:{GButton},
        data(){
          return {
              visible:true
          }
        },
        methods:{
            hideSider(){
                this.visible=false
            }
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
        background: #666666;
        width: 200px;
        height: 500px;

        > .hideButton{
            position: absolute;
            top:0;
            right:0;
        }
    }

    /*时长*/
    .slide-enter-active,.slide-leave-active {
        transition: all 3s
    }

    /*结束状态*/
    .slide-leave-to {
        margin-left: -200px;
    }
</style>