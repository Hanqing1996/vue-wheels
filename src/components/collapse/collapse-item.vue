<template>
    <div class="collapse-item">
        <div class="title" @click="toggleContent">{{title}}</div>
        <div class="content" v-if="open" style="height: 100px">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelCollapseItem",
        props:{
            title:{
                type:String,
                required: true
            },
            name:{
                type:String,
                required: true
            },
            single:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                open:false
            }
        },
        inject: ['eventBus'],
        methods:{
            toggleContent(){
                if(this.single){
                    // 子组件发送状态更新请求给父组件(子组件不自己更新)
                    this.eventBus&&this.eventBus.$emit('change:Selected', this.name)
                } else{
                    this.open=!this.open
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/var";
    .collapse-item{
        >.title{
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding:0 8px;
        }
        &:first-child{
            >.title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            > .title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        >.content{
            padding:0 8px;
            background-color: red;
        }
    }
</style>