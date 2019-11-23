<template>
    <div class="popover" @click="xxx">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelPopover",
        data(){
            return {
                visible:false
            }
        },
        methods:{
            xxx(){
                this.visible=!this.visible
            }
        }
    }
</script>

<style scoped>
    .popover{
        display: inline-flex;
        vertical-align: center;
    }
    .content-wrapper{
        /*绝对定位*/
        position: absolute;
        bottom: 100%;
        left:0;
        border: 1px solid red;
        box-shadow: 0 0 3px rgb(0,0,0.5);
    }
</style>