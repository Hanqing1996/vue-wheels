<template>
    <div class="g-uploader">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>
        <div ref="temp" style="height: 0;width: 0;overflow: hidden"></div>
        <ol v-if="fileList.length>0" class="fileList" style="border: 1px solid black;padding: 5px">
            <template v-for="file in fileList">
                <li :key="file.name" style="display: flex;flex-direction: row;align-items: center;margin: 10px">
                    <span style="width: 200px">{{file.name}}</span>
                    <div v-if="file.status==='uploading'" :class="{loading:file.status==='uploading'}">
                        <icon name="loading"></icon>
                    </div>
                    <g-button @click.native="onRemove(file)" style="width: 100px">删除</g-button>
                </li>
            </template>
        </ol>
        <div v-if="url">
            <img :src="url" alt="预览图片" ref="img">
        </div>
    </div>
</template>

<script>
    import GButton from '../button/button'
    import Icon from '../button/icon'

    export default {
        name: "uploader",
        components: {GButton,Icon},
        data() {
            return {
                url:''
            }
        },
        props: {
            // 服务器地址
            action: {
                type: String,
                required: true
            },
            method: {
                type: String,
                default: 'POST'
            },
            parseResponse: {
                type: Function,
                required: true
            },
            // 上传的文件列表
            fileList: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onRemove(file) {
                let answer = window.confirm('确定删除?')
                if (answer) {
                    let targetName = file.name
                    this.$emit('update:fileList', this.fileList.filter(file => file.name !== targetName))
                }
            },
            onClickUpload() {
                let input = this.createInput()
                input.addEventListener('change', () => {
                    let file = input.files[0]
                    input.remove()
                    this.uploadFile(file)
                })
                input.click()
            },
            createInput() {
                let input = document.createElement('input')
                input.type = "file"
                input.name = "uploadFile"
                this.$refs.temp.appendChild(input)
                return input
            },
            uploadFile(file) {
                let formData = new FormData()
                formData.append('uploadFile', file)

                let {name, type, size} = file

                let xxxFile = {
                    name: this.generateName(name),
                    type,
                    size,
                    status: 'uploading',
                }
                this.$emit('update:fileList', [...this.fileList, xxxFile])

                this.sendRequest(formData, (response) => {
                    this.afterUploadFile(xxxFile.name)
                    console.log(response)
                    this.url = this.parseResponse(response)
                    console.log(this.url)
                },()=>{
                    this.updateStatusByName(xxxFile.name,'uploadFailed')
                })
            },
            updateStatusByName(targetName,status){
                let copy=JSON.parse(JSON.stringify(this.fileList))
                copy.forEach(file => {
                    if (file.name === targetName) {
                        file.status = status
                    }
                })
                this.$emit('update:fileList',copy)
            },
            afterUploadFile(targetName){
                this.updateStatusByName(targetName,'uploaded')
            },
            sendRequest(formData, success,fail) {

                let xhr = new XMLHttpRequest()
                xhr.open(this.method, this.action)
                xhr.send(formData)
                xhr.onload = () => {
                    success(xhr.response)
                }
                xhr.onerror=fail
            },
            generateName(name) {
                while (this.fileList.filter(f => f.name === name).length > 0) {
                    let dotIndex = name.lastIndexOf('.')
                    let nameWithoutExtension = name.substring(0, dotIndex)
                    let extension = name.substring(dotIndex)
                    name = nameWithoutExtension + '(1)' + extension
                }
                return name
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "src/var";

    .g-uploader {
        > .fileList{
            list-style: none;
        }
    }
    .loading {
        > svg {
            @include spin;
        }
    }
</style>