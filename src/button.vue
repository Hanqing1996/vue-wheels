<!--将 button.js 改为集成 js,html,style 的单文件组件 button.vue-->
<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default {}
</script>
<style lang="">
    .g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
    }
    &:hover {
        border-color: var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    &:focus {
        outline: none;
    }
</style>