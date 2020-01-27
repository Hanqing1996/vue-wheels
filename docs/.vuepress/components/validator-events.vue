<template>
    <div class="base">
        <section>
            <h2>Validator-Events</h2>
            <div class="attr">
                <table>
                    <thead>
                    <tr>
                        <th>事件名称</th>
                        <th class="des">说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>validateData</td>
                        <td class="des">按照 rules 遍历 data,以校验数据</td>
                    </tr>
                    <tr>
                        <td>addRule</td>
                        <td class="des">自定义规则：为 validator 实例添加方法</td>
                    </tr>
                    <tr>
                        <td>addPublicRule</td>
                        <td class="des">公共规则：为 validator 类添加方法（慎用！）</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "validator-events"
    }
</script>

<style lang="scss" scoped>
</style>