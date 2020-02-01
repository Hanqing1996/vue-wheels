<template>
    <div class="demo">
        <h2>行选中</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <g-table :selectedItems.sync="selectedItems"
                     :columns="columns"
                     :dataSource="dataSource"
                     :orderBy.sync="orderBy"
                     :loading.sync="loading"
                     height="350px"
                     bordered
                     checkable

                     @update:orderBy="ajaxToRearEnd">
                <template slot="content" slot-scope="{xxx}">
                    <g-button style="margin-right: 10px">编辑</g-button>
                    <g-button>查看</g-button>
                </template>
            </g-table>
        </div>
        <div>
            <p>
                <strong>代码</strong>
            </p>
            <div class="code-content" style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{codeStr2}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(1)" ref="xxx">
                <g-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></g-icon>
                <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import GTable from "../../../src/components/table/table";
    import GButton from "../../../src/components/button/button";
    import GIcon from '../../../src/components/button/icon'

    import mixin from '../mixin'

    export default {
        name: "table-demo2",
        mixins: [mixin],
        components: {GTable,GButton,GIcon},
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
                codeStr2: `
<g-table :selectedItems.sync="selectedItems"
         :columns="columns"
         :dataSource="dataSource"
         :orderBy.sync="orderBy"
         :loading.sync="loading"
         height="350px"
         checkable

         @update:orderBy="ajaxToRearEnd">
    <template slot="content" slot-scope="{xxx}">
        <g-button style="margin-right: 10px">编辑</g-button>
        <g-button>查看</g-button>
    </template>
</g-table>
`.replace(/^ {8}/gm, '').trim()

            }
        },
        methods: {
            // 让后端去排序
            ajaxToRearEnd(){
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