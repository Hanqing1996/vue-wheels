<template>
    <div class="base">
        <section>
            <h2>Cascader-Attributes</h2>
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
                        <td>source</td>
                        <td class="des">级联选择器数据源</td>
                        <td class="type">array</td>
                        <td>—</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>selected</td>
                        <td class="des">当前选中项，为数据项集合</td>
                        <td class="type">array</td>
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
        name: "cascader-attributes"
    }
</script>

<style>
</style>