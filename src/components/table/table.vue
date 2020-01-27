<template>
    <div class="tableWrapper">
        <table class="g-table" :class="{bordered,compacted,noStripe:!striped}">
            <thead>
            <tr>
                <th><input type="checkbox" @change="onChangeAll"></th>
                <th v-if="numberVisible">#</th>
                <template v-for="column in columns">
                    <th>{{column.text}}</th>
                </template>
            </tr>
            </thead>
            <tbody>
            <template v-for="item,index in dataSource">
                <tr>
                    <td><input type="checkbox" @change="onChangeItem(item,$event)" :checked="selectedItems.filter(i=>i.id===item.id).length>0">
                    </td>
                    <td v-if="numberVisible">{{index+1}}</td>
                    <template v-for="key in Object.keys(item).filter(k=>k!=='id')">
                        <td>{{item[key]}}</td>
                    </template>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "WheelsTable",
        props: {
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
                required: true
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
        methods: {
            onChangeAll(e) {
                let copy = []
                if (e.target.checked) {
                    this.dataSource.forEach(item => {
                        copy.push(item)
                    })
                }
                this.$emit('update:selectedItems', copy)
            },
            onChangeItem(item,e) {

                let copy = JSON.parse(JSON.stringify(this.selectedItems))

                if(e.target.checked){
                    copy.push(item)
                }
                else{
                    console.log('删除');
                    copy.splice(copy.indexOf(item),1)
                }

                this.$emit('update:selectedItems', copy)
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "src/var";

    $grey: darken($grey, 10%); /*加深10%*/

    .g-table {
        width: 100%;
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
            border-bottom: 1px solid $grey;
            text-align: left;
            padding: 8px;
        }

        tbody {
            > tr {
                &:nth-child(odd) {
                    background-color: $white;
                }

                &:nth-child(even) {
                    background-color: lighten($grey, 10%);
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
</style>