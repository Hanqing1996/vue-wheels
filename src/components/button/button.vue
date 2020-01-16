<!--将 button.js 改为集成 js,html,style 的单文件组件 button.vue-->
<template>
    <!--通过icon-${iconPosition}来设置样式-->
    <button class="button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click1')">
        <!--注意class的icon值为字符串，而v-if，v-bind绑定的icon值由用户传入-->
        <!--v-if="icon&&!loading"：没有loading的情况下，用户传入icon值，则渲染svg-->
        <!--:name="icon"：用户传入icon的值（svg的名字）-->
        <Icon v-if="icon&&!loading" class="icon" :name=icon></Icon>

        <!--这里的loading是字符串，不是变量名，所以用name而不是:name-->
        <Icon v-if="loading" class="loading icon" name="loading"></Icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    // 引入Icon组件
    import Icon from './icon'

    export default {
        name:"WheelButton",

        components:{Icon},
        props: {
            icon: {},
            loading:{
                type:Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',

                // 属性检查器
                validator(value) {
                    return ['left','right'].indexOf(value)>=0
                    // return value === 'left' || value === 'right'
                }
            },
        },
    }
</script>
<style lang="scss" scoped>
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }

    .button { font-size: $font-size; height: $button-height; padding: 0 1em;
        border-radius: $border-radius; border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex; justify-content: center; align-items: center;
        &:hover { border-color: $border-color-hover; }
        &:active { background-color: $button-active-bg; }
        &:focus { outline: none; }

        /*默认的 icon 与 content 排列：icon 左，content 右*/
        > .content { order: 2; }
        > .icon { order: 1; margin-right: .1em; }

        &.icon-right {
            > .content { order: 1; }
            > .icon { order: 2; margin-right: 0; margin-left: .1em;}
        }

        /*让loading旋转*/
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>