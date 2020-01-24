<template>
    <div class="g-pager">
        <span class="pager-item direction" @click="turnLast">
            <Icon name="left"></Icon>
        </span>
        <template v-for="page in pages">
            <template v-if="page===currentPage">
                <span class="pager-item" :class="{selected:page===currentPage}" :data-page=page>{{page}}</span>
            </template>
            <template v-else-if="page==='...'">
                <span class="pager-item" :class="{separator:page==='...'}">
                    <Icon name="ellipsis"></Icon>
                </span>
            </template>
            <template v-else>
                <span class="pager-item" @click="onClickPage(page)" :data-page=page>{{page}}</span>
            </template>
        </template>
        <span class="pager-item direction" @click="turnNext">
            <Icon name="right"></Icon>
        </span>
    </div>
</template>

<script>
    import Icon from '../button/icon'

    export default {
        name: "WheelsPager",
        components: {Icon},
        props: {
            totalPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            }
        },
        computed: {
            pages() {
                let pages = [1, this.totalPage, this.currentPage]
                if (this.currentPage > 1)
                    pages.push(this.currentPage - 1)
                if (this.currentPage > 2)
                    pages.push(this.currentPage - 1)
                if (this.currentPage < this.totalPage)
                    pages.push(this.currentPage + 1)
                if (this.currentPage < this.totalPage - 1)
                    pages.push(this.currentPage + 2)

                let u = unique(pages.sort((a, b) => a - b))
                let u2 = u.reduce((pre, current, index) => {
                    pre.push(current)
                    if (u[index + 1] && u[index + 1] - u[index] > 1) {
                        pre.push('...')
                    }
                    return pre
                }, [])
                return u2
            }
        },
        methods: {
            onClickPage(page){
                this.updateCurrentPage(page)
            },
            turnNext() {
                if (this.currentPage < this.totalPage) {
                    this.updateCurrentPage(this.currentPage+1)
                }


            },
            turnLast() {
                if (this.currentPage > 1) {
                    this.updateCurrentPage(this.currentPage-1)
                }
            },
            updateCurrentPage(currentPage) {
                this.$emit('update:currentPage', currentPage)
            }
        }
    }

    // 去重
    function unique(array) {
        const object = {}
        array.map(number => {
            object[number] = true
        })
        return Object.keys(object).map(s => parseInt(s, 10))
    }
</script>

<style scoped lang="scss">
    @import "src/var";

    .g-pager {
        display: flex;
        flex-direction: row;

        > .pager-item {
            border: 1px solid $grey;
            border-radius: $border-radius;
            min-width: 24px;
            text-align: center;
            margin: 5px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            user-select: none;

            &.selected, &:hover {
                border-color: $blue;
            }

            &.selected, .separator {
                cursor: default;
            }

            &.direction {
                margin-left: 0px;
                margin-right: 0px;
                border: none;

                > svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }


</style>