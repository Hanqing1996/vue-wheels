<template>
    <div class="base">
        <section>
            <h2>Uploader-Attributes</h2>
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
                        <td>action</td>
                        <td class="des">服务器地址</td>
                        <td class="type">string</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>method</td>
                        <td class="des">请求方式</td>
                        <td class="type">string</td>
                        <td>—</td>
                        <td>'POST'</td>
                    </tr>
                    <tr>
                        <td>parseResponse</td>
                        <td class="des">以指定格式解析后端传回的数据</td>
                        <td class="type">function</td>
                        <td>—</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>fileList</td>
                        <td class="des">上传的文件列表</td>
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
        name: "uploader-attributes"
    }
</script>

<style>
</style>