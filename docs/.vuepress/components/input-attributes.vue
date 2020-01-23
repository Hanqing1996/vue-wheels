<template>
    <div class="base">
        <section>
            <h2>Input-Attributes</h2>
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
                        <td>value / v-model</td>
                        <td class="des">绑定值</td>
                        <td class="type">string / number</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td class="des">禁用</td>
                        <td class="type">boolean</td>
                        <td>true , false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>readonly</td>
                        <td class="des">是否只读</td>
                        <td class="type">boolean</td>
                        <td>true , false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>error</td>
                        <td class="des">错误信息</td>
                        <td class="type">string</td>
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
        name: "input-attributes"
    }
</script>

<style>
</style>