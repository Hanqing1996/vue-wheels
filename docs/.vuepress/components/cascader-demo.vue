<template>
    <div class="demo">
        <h2>基本用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <div>
                <g-cascader :source="source" :selected="selected" 　@update:selected="updateSelected($event)"
                            　@update:closeSelected="selected=[]">
                </g-cascader>
            </div>
            <div>
                <p>
                    <strong>代码</strong>
                </p>
                <div>
                    <pre><code>{{codeStr}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GCascader from '../../../src/components/cascader/cascader'
    import db from '../../../tests/fixture/db'

    export default {
        name: "toast-demo",
        components: {GCascader},
        data() {
            return {
                selected: [],
                source:[],
                codeStr: `
<g-cascader :source="source" :selected="selected" 　@update:selected="updateSelected($event)"
            　@update:closeSelected="selected=[]">
</g-cascader>
`,
            }
        },
        methods: {
            ajax(parentId = 0) {
                return new Promise((resolve, reject) => {
                    let timeId = setTimeout(() => {
                        let result = db.filter(item => item.parent_id === parentId)
                        resolve(result)
                    }, 1000)
                })
            },
            updateSelected(event) {

                let len = event.length
                let level = len - 1

                this.ajax(event[level].id).then(result => {

                    // 找得到children,才赋予children属性,也就是说"上城区"这些item是不会有children的
                    if (result.length > 0) {
                        event[level].children = JSON.parse(JSON.stringify(result))
                    }
                    this.selected = JSON.parse(JSON.stringify(event))
                })
            }
        },
        created() {
            // 动态获取source
            this.ajax(0).then(result => {
                this.source = JSON.parse(JSON.stringify(result))
            })
        }
    }
</script>

<style scoped>

</style>