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
                        <td>autoClose</td>
                        <td class="des">弹出层自动关闭时间</td>
                        <td class="type">boolean / number</td>
                        <td>—</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>enableHTML</td>
                        <td class="des">是否允许向toast的slot中插入HTML内容（这是一种危险的行为）</td>
                        <td class="type">boolean</td>
                        <td>true , false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>position</td>
                        <td class="des">提示框位置</td>
                        <td class="type">string</td>
                        <td>—</td>
                        <td>top</td>
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
        name: "toast-attributes"
    }
</script>

<style>
</style>