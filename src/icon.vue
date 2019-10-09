<template>
    <!--用户传入icon值，则渲染svg-->
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    export default {
        props:['name']
    }
</script>
<style lang="scss">
    .g-icon{width: 1em;height: 1em;}
</style>