<template>
    <div class="base">
        <section>
            <h2>Popover-Attributes</h2>
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
                        <td>position</td>
                        <td class="des">弹出层位置</td>
                        <td class="type">string</td>
                        <td>top , bottom , left , right</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>trigger</td>
                        <td class="des">触犯弹出层事件名</td>
                        <td class="type">string</td>
                        <td>click , hover</td>
                        <td>'click'</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "popover-attributes"
    }
</script>

<style>
</style>