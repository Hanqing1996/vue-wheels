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
    let validator=(value)=>{
        let keys = Object.keys(value)
        let arr = ['span', 'offset']
        let res = keys.filter(item => !arr.includes(item))

        return res.length === 0
    }
    export default {
        name: "WheelCol",

        data() {
            return {
                gutter: 0,
            }

            // 写在 data 里的 colStyle 是不会随 gutter 更新的（只在 created 读取一次），所以含有 gutter 的 colStyle 不能写在 data 里面
        },

        // colStyle 作为计算属性使用，以保证 colstyle 这个对象能随 gutter 更新而更新
        computed: {
            colStyle: function () {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClass: function () {
                // class 数组写法
                let {span,iPad,narrowPc,widePc} = this
                return [
                    span && `col-${span}`,
                    ...iPad?[`col-iPad-${iPad.span}`]:[],
                    ...narrowPc?[`col-narrowPc-${narrowPc.span}`]:[],
                    ...widePc?[`col-widePc-${widePc.span}`]:[]
                ]
            }
        },

        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            iPad: {type: Object, validator},
            narrowPc:{type: Object, validator},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,}
        },
        mounted() {
        }
    }
</script>
<style scoped lang="scss">
    .col {
        /*background: grey;*/
        /*width: 50%;*/

        /*col-1 到 col-24,24种样式*/
        $class-prefix: col-;
        @for $n from 1 through 24 {

            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        /*设置不同样式最窄宽度可以保证当用户没有填写ipad.sapn时col样式与phone一致*/

        /*iPad配适:最窄577px*/
        @media (min-width: 577px) {
            $class-prefix: col-iPad-;
            @for $n from 1 through 24 {

                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
        }

        /*narrowPc配适:最窄769px)*/
        @media (min-width: 769px) {
            $class-prefix: col-narrowPc-;
            @for $n from 1 through 24 {

                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
        }
        /*pc配适:最窄993px*/
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
        }
        /*widepc配适:最窄1201px*/
        @media (min-width: 1201px) {
            $class-prefix: col-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
        }

    }
</style>
