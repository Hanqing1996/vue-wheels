<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <div class="level1">
                <div v-for="item in source">
                    <div @click="selectedLevel1=item">{{item.name}}</div>
                </div>
            </div>

            <div class="level2" v-if="selectedLevel1">
                <div v-for="item in level2Items">
                    <div @click="selectedLevel2=item">{{item.name}}</div>
                </div>
            </div>

            <div class="level3" v-if="selectedLevel2">
                <div v-for="item in level3Items">
                    <div>{{item.name}}</div>
                </div>
            </div>


        </div>
        <!--            <div v-for="item in source">-->
        <!--                <CascaderItems :sourceItem="item"></CascaderItems>-->
        <!--            </div>-->
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'

    export default {
        name: "WheelCascader",
        components: {CascaderItems},
        props: {
            source: {
                type: Array
            }
        },
        data() {
            return {
                popoverVisible: false,
                selectedLevel1: null,
                selectedLevel2:null
            }
        },
        computed: {
            level2Items: function () {
                if (this.selectedLevel1) {
                    return this.selectedLevel1.children
                } else return [];
            },
            level3Items: function () {
                if (this.selectedLevel2) {
                    return this.selectedLevel2.children
                } else return [];
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader {
        > .trigger {
            width: 100px;
            height: 32px;
            border: 1px solid red;
        }
        > .popover{
            display: flex;
            >.level1{
                width: 80px;
                height: 280px;
                border: 1px solid blue;
            }
            >.level2{
                width: 80px;
                height: 140px;
                border: 1px solid red;
            }
            >.level3{
                width: 80px;
                height: 70px;
                border: 1px solid black;
            }
        }
    }

</style>