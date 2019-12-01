<template>
    <div>
        {{sourceItem.name}}
        <div v-if="sourceItem.children">
            <div v-for="item in sourceItem.children">
                <CascaderedItems :sourceItem="item"></CascaderedItems>
            </div>
        </div>
    </div>
</template>

<script>
    // 递归调用
    const component = {
        name: "CascaderedItems",
        components:{
            CascaderedItems: component
        },
        props: {
            sourceItem: {
                type: Object
            }
        }
    }
    export default component
</script>

<style scoped>

</style>