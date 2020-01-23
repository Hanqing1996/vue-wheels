<template>
    <div class="g-pager">
        <span v-for="page in pages" class="pager-item" :class="{active:page===currentPage,separator:page==='...'}">
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
                this.currentPage - 1,
                this.currentPage - 2,
                this.currentPage + 1,
                this.currentPage + 2
            ]
            let u = unique(pages.sort((a, b) => a - b))
            let u2 = u.reduce((pre, current, index) => {
                pre.push(current)
                if (u[index + 1] && u[index + 1] - u[index] > 1) {
                    pre.push('...')
                }
                return pre
            }, [])

            return {
                pages: u2
            }
        },

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
            min-width: 20px;
            text-align: center;
            margin: 5px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            user-select: none;

            &.active, &:hover {
                border-color: $blue;
            }

            &.active, .separator {
                cursor: default;
            }
        }
    }


</style>