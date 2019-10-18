<template>
    <!--col-2,col-22-->
    <!--offset&& 用于避免 offset-undefined 的class出现-->
    <div class="col" :class="[span&&`col-${span}`,offset&&`offset-${offset}`] ">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"WheelCol",

        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        height: 100px;
        background: grey;
        width: 50%;
        border: 1px solid red;

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
