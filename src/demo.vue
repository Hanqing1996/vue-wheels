<template>
    <div>
        <div>
            <g-table :selectedItems.sync="selectedItems"
                     :columns="columns"
                     :dataSource="dataSource"
                     :orderBy.sync="orderBy"
                     :loading.sync="loading"
                     @update:orderBy="xxx">
            </g-table>
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
                loading:false,
                columns: [
                    {text: '姓名', field: 'name'},
                    {text: '分数', field: 'score'},
                    {text: '身高', field: 'height'},
                ],
                orderBy:{
                  name:'asc',
                  score:true
                },
                dataSource: [{
                    id: 1, name: '乔斯达', score: 100,height:192
                }, {
                    id: 2, name: '承太郎', score: 99,height:191
                },{
                    id: 3, name: '东方仗助', score: 89,height:193
                },{
                    id: 4, name: '花京院', score: 79,height:184
                },{
                    id: 5, name: '徐伦', score: 99,height:195
                },{
                    id: 6, name: '迪奥', score: 93,height:189
                },{
                    id: 7, name: '乔纳森', score: 91,height:178
                },{
                    id: 8, name: '西撒', score: 69,height:188
                },{
                    id: 9, name: '莉莎莉莎', score: 73,height:173
                },{
                    id: 10, name: '丝吉Q', score: 83,height:172
                }],

            }
        },
        methods: {
            // 让后端去排序
            xxx(){
                /*
                ajax(url,orderBy) // url:/api/users?score='desc'
                .then(res=>{
                    this.dataSource=res.dataSource
                })
               */
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>