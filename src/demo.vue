<template>
    <div>
        <div>
            <g-table :selectedItems.sync="selectedItems" :columns="columns" :dataSource="dataSource" @changeItem="xxx($event)"></g-table>
        </div>
    </div>
</template>

<script>
    import GTable from "./components/table/table";

    export default {
        name: "demo",
        components: {GTable},
        data() {
            return {
                selectedItems:[],
                columns: [
                    {text: '姓名', field: 'name'},
                    {text: '分数', field: 'score'},
                ],
                dataSource: [{
                    id: 1, name: '乔斯达', score: 100
                }, {
                    id: 2, name: '承太郎', score: 99
                },{
                    id: 3, name: '东方仗助', score: 89
                },{
                    id: 4, name: '花京院', score: 79
                },{
                    id: 5, name: '承太郎', score: 99
                },{
                    id: 6, name: '迪奥', score: 93
                },{
                    id: 7, name: '乔纳森', score: 91
                },{
                    id: 8, name: '西撒', score: 69
                },{
                    id: 9, name: '莉莎莉莎', score: 73
                },{
                    id: 10, name: '丝吉Q', score: 83
                }],

            }
        },
        methods: {
            xxx(obj){
                console.log(obj);
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>