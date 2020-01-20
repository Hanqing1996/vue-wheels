<template>
    <div class="base">
        <section>
            <h2>Tabs-Attributes</h2>
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
                        <td class="des">当前播放项</td>
                        <td class="type">string</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>autoPlay</td>
                        <td class="des">是否自动播放</td>
                        <td class="type">Boolean</td>
                        <td>—</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>autoPlayDelay</td>
                        <td class="des">每幅海报展示时间,以毫秒为单位</td>
                        <td class="type">number</td>
                        <td>—</td>
                        <td>3000</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "slides-attributes"
    }
</script>

<style>
</style>