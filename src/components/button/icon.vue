<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import '../../svg'

    export default {
        name:'WheelIcon',
        props:['name']
    }
</script>
<style lang="scss" scoped>
    .icon{width: 1em;height: 1em;}
</style>