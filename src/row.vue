<template>
    <div class="row"  :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px',}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'wheelRow',
        props:{
            gutter:{
                type:[Number,String]
            }
        },

        // created(){
        //     console.log("row is created")
        // },
        mounted() {
            // console.log("row is mounted")

            // console.log(this.$children);

            // 把父组件的 gutter 传递给子组件
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        }
    }
</script>
<style scoped lang="scss">
    .row {
        display: flex;
    }
</style>