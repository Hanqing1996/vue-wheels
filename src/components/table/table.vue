<template>
    <div class="tableWrapper" ref="wrapper">
        <div :style="{height,overflow:'auto',margin:0,padding:0}">
            <table ref="table" class="g-table" :class="{bordered,compacted,noStripe:!striped}">
                <thead>
                <tr>
                    <th v-if="expendKey" style="width: 30px;text-align: center"></th>
                    <th  v-if="checkable" style="width: 30px;text-align: center"><input type="checkbox" @change="onChangeAll" ref="allCheck" :checked="allChecked"></th>
                    <th v-if="numberVisible" style="width: 30px;text-align: center">#</th>
                    <template v-for="column in columns">
                        <th :key="column.field" >
                            <div class="wrapper">
                                {{column.text}}
                                <span class="iconWrapper" v-if="column.field in orderBy"
                                      @click="changeSortRule(column.field)">
                            <icon name="up"
                                  :class="{active:orderBy[column.field]&&orderBy[column.field]==='asc'}"></icon>
                            <icon name="down"
                                  :class="{active:orderBy[column.field]&&orderBy[column.field]==='desc'}"></icon>
                        </span>
                            </div>
                        </th>
                    </template>
                    <th style="width: 200px">操作</th>
                </tr>
                </thead>
                <tbody>

                <template v-for="item,index in dataSource">
                    <tr :key="item.id" >
                        <th v-if="expendKey" style="width: 30px;text-align: center" >
                            <span class="rowIcon" :class="{open:inexpendedItemsIds(item.id)&&expendKey}">
                                <icon name="right" @click.native="xxx(item)"></icon>
                            </span>
                        </th>

                        <td v-if="checkable" style="width: 30px;text-align: center" ><input type="checkbox" @change="onChangeItem(item,$event)"
                                   :checked="inselectedItemsIds(item.id)">
                        </td>
                        <td v-if="numberVisible" style="width: 30px;text-align: center">{{index+1}}</td>
                        <template v-for="key in Object.keys(item).filter(k=>k!=='id'&&k!=='description')">
                            <td :key="key" >{{item[key]}}</td>
                        </template>
                        <td style="width: 200px">
                            <slot name="content" :xxx="item"></slot>
                        </td>
                    </tr>
                    <tr v-if="inexpendedItemsIds(item.id)&&expendKey" :key="item[expendKey]">
                        <td :colspan="1" style="width: 30px;text-align: center"></td>
                        <td :colspan="columns.length+2">
                            {{item[expendKey]}}
                        </td>
                    </tr>
                </template>

                </tbody>
            </table>

        </div>
        <div :class="{loading}" v-if="loading" style="width: 650px">
            <icon name="loading"></icon>
        </div>
    </div>
</template>

<script>
    import Icon from '../button/icon'

    export default {
        name: "WheelsTable",
        components: {Icon},
        props: {
            checkable:{
                type:Boolean,
                default:false
            },
            expendKey:{
                type: [Boolean,String],
                default:false
            },
            // 包含表头的高度
            height: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            },
            orderBy: {
                type: Object,
                default: () => ({})
            },
            selectedItems: {
                type: Array,
                required: true
            },
            columns: {
                type: Array,
                required: true
            },
            dataSource: {
                type: Array,
                required: true,
                validator(array) {
                    return !array.filter(item => item.id == undefined).length > 0
                }
            },
            numberVisible: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: false
            },
            compacted: {
                type: Boolean,
                default: false
            },
            striped: {
                type: Boolean,
                default: true
            }
        },
        data(){
          return {
              expendedItems:[],
          }
        },
        computed: {
            allChecked() {
                let dataIds = this.dataSource.map(item => item.id).sort()
                let selectedIds = this.selectedItems.map(item => item.id).sort()
                if (dataIds.length === selectedIds.length) {
                    let notEqual = false
                    for (let i = 0; i < dataIds.length; i++) {
                        if (dataIds[i] !== selectedIds[i])
                            notEqual = true
                    }
                    return !notEqual
                } else {
                    return false
                }
            }
        },
        watch: {
            loading() {
                if (this.loading) {
                    setTimeout(() => {
                        this.$emit("update:loading", false)
                    }, 3000)
                }
            },
            selectedItems() {
                let selectedLength = this.selectedItems.length
                let dataLength = this.dataSource.length
                if (selectedLength && selectedLength < dataLength && selectedLength) {
                    this.$refs.allCheck.indeterminate = true
                } else
                    this.$refs.allCheck.indeterminate = false
            }
        },
        methods: {
            xxx(item){
                if(!this.inexpendedItemsIds(item.id)){
                    this.expendedItems.push(item)
                } else{
                    let targetId=item.id
                    this.expendedItems=this.expendedItems.filter(item=>item.id!==targetId)
                }
            },
            // 修改 table2 的宽度
            updateTableWidth() {
                let {width} = this.table.getBoundingClientRect()
                this.table2.style.width = `${width}px`
            },
            // 修改 table 的 marginTop
            updateTableMarginTop() {
                let {height}=this.table2.getBoundingClientRect()
                let borderBottomWidth=Number(getComputedStyle(this.table,null).getPropertyValue('border-bottom-width').split('px')[0]);

                this.table.style.marginTop=`${height-borderBottomWidth}px`
            },
            changeSortRule(key) {
                let copy = this.orderBy
                // 上->下
                if (copy[key] === 'asc') {
                    copy[key] = 'desc'
                    // 下->空
                } else if (copy[key] === 'desc') {
                    copy[key] = true
                    // 空->上
                } else {
                    copy[key] = 'asc'
                }
                this.$emit("update:orderBy", copy)
                this.$emit("update:loading", true)
            },
            inselectedItemsIds(id) {
                return this.selectedItems.filter(i => i.id === id).length > 0
            },
            inexpendedItemsIds(id) {
                return this.expendedItems.filter(i => i.id === id).length > 0
            },
            onChangeAll(e) {
                let copy = []
                if (e.target.checked) {
                    this.dataSource.forEach(item => {
                        copy.push(item)
                    })
                }
                this.$emit('update:selectedItems', copy)
            },
            onChangeItem(item, e) {
                let targetId = item.id
                let copy = JSON.parse(JSON.stringify(this.selectedItems))

                // e.target.checked 变为 true 发生在 onChangeItem 执行之前
                if (e.target.checked) {
                    copy.push(item)
                } else {
                    copy = copy.filter(item => item.id !== targetId)
                }
                this.$emit('update:selectedItems', copy)
            }
        },
        mounted() {
            let table2 = this.$refs.table.cloneNode(false)
            this.table=this.$refs.table
            this.table2=table2


            this.table2.style.border='none'

            table2.appendChild(this.table.children[0])
            this.$refs.wrapper.appendChild(table2)
            table2.classList.add('tableCopy')

            this.updateTableMarginTop()
            this.updateTableWidth()

            this.onWindowResize = () => {
                this.updateTableWidth()
            }
            window.addEventListener('resize', this.onWindowResize)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onWindowResize)
            this.table2.remove()
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/var";

    *{
        margin:0;
        padding:0;
    }

    $grey: darken($grey, 10%); /*加深10%*/

    .tableWrapper {
        position: relative;
    }

    .g-table {
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid $grey;

        /*边框*/
        &.bordered {
            border: 1px solid $grey;

            td, th {
                border: 1px solid $grey;
            }
        }

        /*紧凑*/
        &.compacted {
            th, td {
                padding: 4px;
            }
        }

        th, td {
            width: 90px;
            border-bottom: 1px solid $grey;
            text-align: left;
            padding: 8px;
        }

        tbody {
            > .data {
                &:nth-child(odd) {
                    background-color: $white;
                }
                &:nth-child(even) {
                    background-color: lighten($grey,10%);
                }
            }
        }

        &.noStripe {
            > tbody {
                > tr {
                    background-color: $white;
                }
            }
        }
    }

    .wrapper {
        user-select: none;
        display: flex;
        align-items: center;

        .iconWrapper {
            margin-left: 5px;
            display: flex;
            flex-direction: column;

            svg {
                fill: $grey;
                width: 8px;
                height: 8px;
                cursor: pointer;
            }

            > .active {
                fill: black;
                cursor: default;
            }
        }
    }

    .loading {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.8);

        > svg {
            width: 30px;
            height: 30px;
            @include spin;
        }
    }

    .tableCopy {
        background-color: white;
        position: absolute;
        top: 0px;
        left: 0;
    }

    .rowIcon {
        display: inline-block;
        vertical-align: middle;
        transition: transform 250ms;

        &.open {
            transform: rotate(90deg);
        }
    }
</style>