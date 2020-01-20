<template>
    <div class="base">
        <section>
            <h2>Events</h2>
            <div class="attr">
                <table>
                    <thead>
                    <tr>
                        <th>事件名称</th>
                        <th class="des">说明</th>
                        <th class="type">回调参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>blur</td>
                        <td class="des">在 Input 失去焦点时触发</td>
                        <td>(event: Event)</td>
                    </tr>
                    <tr>
                        <td>focus</td>
                        <td class="des">在 Input 获得焦点时触发</td>
                        <td>(event: Event)</td>
                    </tr>
                    <tr>
                        <td>change</td>
                        <td class="des">change</td>
                        <td>(value: string | number)</td>
                    </tr>
                    <tr>
                        <td>input</td>
                        <td class="des">在 Input 值改变时触发</td>
                        <td>(value: string | number)</td>
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

<style lang="scss" scoped>
</style>