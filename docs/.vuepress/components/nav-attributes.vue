<template>
    <div class="base">
        <section>
            <h2>Nav-Attributes</h2>
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
                        <td>selected</td>
                        <td class="des">当前选中项</td>
                        <td class="type">string</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>vertical</td>
                        <td class="des">导航栏是否垂直排列</td>
                        <td class="type">boolean</td>
                        <td>true , false </td>
                        <td>false</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "nav-attributes"
    }
</script>
<style>
</style>