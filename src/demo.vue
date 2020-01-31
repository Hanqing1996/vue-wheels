<template>
    <div>
        <div>
            <g-table :selectedItems.sync="selectedItems"
                     :columns="columns"
                     :dataSource="dataSource"
                     :orderBy.sync="orderBy"
                     :loading.sync="loading"
                     height="300px"
                     bordered
                     :expendKey="expendKey"

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
                expendKey:'description',
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
                    id: 1, name: '乔斯达', score: 100,height:192,description:'OMG1'
                }, {
                    id: 2, name: '承太郎', score: 99,height:191,description:'OMG2'
                },{
                    id: 3, name: '东方仗助', score: 89,height:193,description:'OMG3'
                },{
                    id: 4, name: '花京院', score: 79,height:184,description:'OMG4'
                },{
                    id: 5, name: '徐伦', score: 99,height:195,description:'OMG5'
                },{
                    id: 6, name: '迪奥', score: 93,height:189,description:'OMG6'
                },{
                    id: 7, name: '乔纳森', score: 91,height:178,description:'OMG7'
                },{
                    id: 8, name: '西撒', score: 69,height:188,description:'OMG8'
                },{
                    id: 9, name: '莉莎莉莎', score: 73,height:173,description:'OMG9'
                },{
                    id: 10, name: '丝吉Q', score: 83,height:172,description:'OMG10'
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