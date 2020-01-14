<template>
    <div>
        <g-button>hi</g-button>
            <g-cascader :source="source" :selected="selected" 　@update:selected="xxx($event)"
                        　@update:closeSelected="selected=[]">
            </g-cascader>


            <g-slides :selected="sliderSelected" :autoPlay="autoPlaySliders" @play="playSliders($event)">
                <g-slides-item name="1">
                    <div class="box">1</div>
                </g-slides-item >
                <g-slides-item name="2">
                    <div class="box">2</div>
                </g-slides-item>
                <g-slides-item name="3">
                    <div class="box">3</div>
                </g-slides-item>
            </g-slides>
    </div>
</template>

<script>

    import Button from "./components/button/button";

    import Cascader from "./components/cascader/cascader";
    import db from './db'

    import Slides from "./components/slides/slides"
    import SlidesItem from "./components/slides/slides-item"

    export default {
        name: "demo",
        components: {
            'g-button': Button,
            'g-cascader': Cascader,
            'g-slides':Slides,
            'g-slides-item':SlidesItem,
        },
        data() {
            return {
                selected: [],
                source: [],
                sliderSelected:"1",
                autoPlaySliders:true,
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
            playSliders(num){
                let n=1
                setInterval(()=>{
                    console.log(n);
                    this.sliderSelected=n.toString()
                    n=(n+1)%(num+1)
                    if(n==0)
                        n=1
                },3000)
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

.box{
    height: 100px;
    width: 100px;
    border: 1px solid red;
}
</style>