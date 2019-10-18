<template>
    <!--col-2,col-22-->
    <!--offset&& 用于避免 offset-undefined 的class出现-->
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid green;height: 100px">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "WheelCol",

        data(){
            return {
                gutter:0,
            }

            // 写在 data 里的 colStyle 是不会随 gutter 更新的（只在 created 读取一次），所以含有 gutter 的 colStyle 不能写在 data 里面
        },

        // colStyle 作为计算属性使用，以保证 colstyle 这个对象能随 gutter 更新而更新
        computed:{
            colStyle:function(){
                return {
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px'
                }
            },
            colClass:function () {
                // class 数组写法
                return [this.span&&`col-${this.span}`,this.offset&&`offset-${this.offset}`]
            }
        },

        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        },
    }
</script>
<style scoped lang="scss">
    .col {
        /*background: grey;*/
        /*width: 50%;*/

        // col-1 到 col-24,24种样式
        $class-prefix: col-;
        @for $n from 1 through 24 {

            // #{$n} 类似于 js 的 ${n}
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class-prefix: offset-;
        @for $n from 1 through 24 {

            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>
