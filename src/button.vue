<!--将 button.js 改为集成 js,html,style 的单文件组件 button.vue-->
<template>
    <!--通过icon-${iconPosition}来设置样式-->
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">

        <!--用户传入icon值，则渲染svg-->
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>
<script>
    export default {
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    console.log(value);
                    if(value!='left'&&value!='right') {

                        return false;
                    }
                    else
                        return true;
                }
            }
        }
    }
</script>
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        // &表示当前选择器（button）
        &:hover {border-color: var(--border-color-hover);}
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}

        // icon-position默认样式：icon在左，content在右
        > .content {order: 2;}
        > .icon {order: 1;margin-right: .1em;}

        &.icon-right { > .content {order: 1;}
            > .icon {order: 2;margin-right: 0;margin-left: .1em;}
        }
    }

</style>