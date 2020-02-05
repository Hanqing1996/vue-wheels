<template>
    <div class="g-uploader">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>

        <slot name="tips"></slot>
        <div ref="temp" style="height: 0;width: 0;overflow: hidden"></div>
        <ol>
            <template v-for="file in fileList">
                <li :key="file.name">
                    {{file.name}}
                    <div v-if="file.status==='uploading'" :class="{loading:file.status==='uploading'}">
                        <icon name="loading"></icon>
                    </div>
                    <g-button @click.native="onRemove(file)">删除</g-button>
                </li>
            </template>
        </ol>
    </div>
</template>

<script>
    import GButton from '../button/button'
    import Icon from '../button/icon'

    // http://localhost:3000/upload
    export default {
        name: "uploader",
        components: {GButton,Icon},
        data() {
            return {
                url: 'about:blank'
            }
        },
        props: {
            // 文件名
            name: {
                type: String,
                required: true
            },
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
                    status: 'uploading'
                }
                this.$emit('update:fileList', [...this.fileList, xxxFile])

                this.sendRequest(formData, (response) => {
                    let targetName = xxxFile.name
                    let copy=[...this.fileList]
                    copy.forEach(file => {
                        if (file.name === targetName) {
                            file.status = 'uploaded'
                        }
                    })
                    console.log(copy);
                    this.url = this.parseResponse(response)
                    console.log(this.url);

                })

            },
            sendRequest(formData, success) {
                let xhr = new XMLHttpRequest()
                xhr.open(this.method, this.action)
                xhr.send(formData)
                xhr.onload = () => {
                    success(xhr.response)
                }
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
        border: 1px solid red;
    }
    .loading {
        > svg {
            @include spin;
        }
    }
</style>