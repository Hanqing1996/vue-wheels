<template>
    <div class="g-pager">
        <span v-for="page in pages">
            {{page}}
            </span>
    </div>
</template>

<script>
    export default {
        name: "WheelsPager",
        props: {
            totalPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
            hideIfOnePage: {
                type: Boolean,
                default: true
            }
        },
        data() {
            let pages = [
                1,
                this.totalPage,
                this.currentPage,
                this.currentPage-1,
                this.currentPage-2,
                this.currentPage+1,
                this.currentPage+2
            ]
            let u=unique(pages.sort((a,b)=>a-b)).reduce((pre,current,index)=>{
                pre.push(current)
                if(u[index+1]&&u[index+1]-u[index]>1){
                    pre.push('...')
                }
                return pre
            },[])

            return {
                pages:u
            }
        },

    }
    // 去重
    function unique(array) {
        const object={}
        array.map(number=>{
            object[number]=true
        })
        return Object.keys(object).map(s=>parseInt(s,10))
    }
</script>

<style scoped>

</style>