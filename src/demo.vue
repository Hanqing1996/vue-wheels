<template>
    <div class="g-wrapper">
        <g-uploader
                action="http://localhost:3000/upload"
                name="uploadFile"
                :parseResponse="parseResponse">
            <g-button>上传</g-button>
            <template slot="tips">
                <div>只能上传 300 kb 以内的 png,jpeg 文件</div>
            </template>
        </g-uploader>
        <g-button>保存</g-button>
    </div>
</template>

<script>
    // action="https://zhq-node-server.herokuapp.com/upload"
    import GUploader from "./components/uploader/uploader";
    import GButton from './components/button/button'

    export default {
        name: "demo",
        components: {GUploader, GButton},
        data() {
            return {
            }
        },
        methods: {
            // 以指定格式解析后端传回的数据
            parseResponse(response){
                let {id}=JSON.parse(response)
                let url=`http://localhost:3000/preview/${id}`
                return url
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>