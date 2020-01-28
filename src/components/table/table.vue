<template>
    <div class="tableWrapper">
        <table class="g-table" :class="{bordered,compacted,noStripe:!striped}">
            <thead>
            <tr>
                <th><input type="checkbox" @change="onChangeAll" ref="yyy"></th>
                <th v-if="numberVisible">#</th>
                <template v-for="column in columns">
                    <th :key="column.field">{{column.text}}</th>
                </template>
            </tr>
            </thead>
            <tbody>
            <template v-for="item,index in dataSource">
                <tr :key="item.id">
                    <td><input type="checkbox" @change="onChangeItem(item,$event)" :checked="xxx(item.id)">
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
        methods: {
            xxx(id) {
                return this.selectedItems.filter(i => i.id === id).length > 0
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
                let copy = JSON.parse(JSON.stringify(this.selectedItems))

                if (e.target.checked) {
                    copy.push(item)
                } else {
                    copy.splice(this.selectedItems.indexOf(item), 1)
                }

                this.$emit('update:selectedItems', copy)
            }
        },
        updated() {
            let selectedLength=this.selectedItems.length
            let dataLength=this.dataSource.length
            if(selectedLength&&selectedLength<dataLength&&selectedLength){
                this.$refs.yyy.indeterminate=true
            } else{
                this.$refs.yyy.indeterminate=false
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