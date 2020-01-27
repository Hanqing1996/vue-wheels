<template>
    <div class="base">
        <section>
            <h2>Toast-Attributes</h2>
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
                        <td>key</td>
                        <td class="des">字段名</td>
                        <td class="type">string</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>required</td>
                        <td class="des">是否必填</td>
                        <td class="type">boolean</td>
                        <td>true , false</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>pattern</td>
                        <td class="des">格式</td>
                        <td class="type">string</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>minLength</td>
                        <td class="des">最短长度</td>
                        <td class="type">number</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>errors</td>
                        <td class="des">错误信息</td>
                        <td class="type">Object</td>
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
        name: "validator-attributes"
    }
</script>

<style>
</style>