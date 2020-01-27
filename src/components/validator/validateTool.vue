<template>

</template>

<script>
    import Validator from './validator'

    export default {
        name: "wheelValidateTool",
        data() {
            let validator = new Validator();
            return {
                validator
            }
        },
        props: {
            data: {
                type: Object
            },
            rules: {
                type: Array
            }
        },
        methods: {
            validateData() {
                let errors = this.validator.validate(this.data, this.rules)
                return errors
            },
            addRule(fnName,fn) {
                this.validator[fnName]=fn
            },
            addPublicRule(fnName,fn){
                this.validator.add(fnName,fn)
            }
        }
    }
</script>

<style scoped>

</style>