<template>
    <div class="base">
        <section>
            <h2>Pager-Attributes</h2>
            <div class="attr">
                <table>
                    <thead>
                    <tr>
                        <th>参数</th>
                        <th class="des">说明</th>
                        <th class="type">类型</th>
                        <th>可选值</th>
                        <th>默认值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>totalPage</td>
                        <td class="des">总页数</td>
                        <td class="type">number</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>currentPage , 使用 sync 绑定</td>
                        <td class="des">当前页</td>
                        <td class="type">number</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "pager-attributes"
    }
</script>

<style>
</style>