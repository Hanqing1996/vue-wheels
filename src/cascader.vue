<template>
    <div class="cascader" ref="cascader">
        <div class="trigger" @click="onclickTrigger" ref="triggerWrapper">
            {{popoverContent}}
        </div>
        <div v-show="popoverVisible" ref="contentWrapper">
            <CascaderItems :items="source" :selected="selected"　@update:selected="onUpdate($event)"></CascaderItems>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'

    export default {
        name: "WheelCascader",
        components: {CascaderItems},
        props: {
            source: {
                type: Array
            },
            selected:{
                type:Array,
                default:()=>[]
            }
        },
        data() {
            return {
                popoverVisible: false,
            }
        },
        methods:{
            closePopover(){
                this.popoverVisible=false
                // popover关闭后,应该清空selected
                this.$emit('update:closeSelected')
            },
            openPopover(){
                this.popoverVisible=true
                // popover开启后,设置对其它位置的监听,且不允许监听事件对trigger的触发作出反应
                this.onClickDocument()
            },
            onclickTrigger(){

                if(this.popoverVisible==false){
                    this.openPopover()
                }else{
                    this.closePopover()
                }

            },
            onClickDocument(){
                // 之所以要设置setTimeout,是因为不允许监听事件对trigger的触发作出反应,所以必须阻止一次事件冒泡
                setTimeout(()=>{
                    let eventHandler = (event) => {
                        // 只有点击其它位置,才会触发eventHandler
                        if(!this.$refs.cascader.contains(event.target)){
                            this.closePopover()
                            document.removeEventListener('click', eventHandler)
                        }
                    }
                    document.addEventListener('click', eventHandler)
                })
            },
            onUpdate(newSelected){
                this.$emit('update:selected',newSelected)
            }
        },
        computed:{
            popoverContent:function () {
                return this.selected.map((item)=>item.name).join('-')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader {
        position: relative;
        > .trigger {
            width: 130px;
            border: 1px solid black;
            min-height: 27px;
            line-height: 27px;
            padding:auto 0;
            text-align: center;
        }
    }
</style>