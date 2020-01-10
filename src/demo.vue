<template>
    <div>
        <g-button>hi</g-button>
            <g-cascader :source="source" :selected="selected" 　@update:selected="xxx($event)"
                        　@update:closeSelected="selected=[]">
            </g-cascader>
    </div>
</template>

<script>

    import Button from "./components/button/button";
    import Cascader from "./components/cascader/cascader";
    import db from './db'


    export default {
        name: "demo",
        components: {
            'g-button': Button,
            'g-cascader': Cascader
        },
        data() {
            return {
                selected: [],
                source: [],
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
            xxx(event) {

                let len = event.length
                let level = len - 1

                this.ajax(event[level].id).then(result => {

                    // 找得到children,才赋予children属性,也就是说"上城区"这些item是不会有children的
                    if (result.length > 0) {
                        event[level].children = JSON.parse(JSON.stringify(result))
                    }
                    this.selected = JSON.parse(JSON.stringify(event))
                })
            },
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