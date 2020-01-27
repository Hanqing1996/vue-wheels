import ValidateTool from "./components/validator/validateTool";

function createValidateTool(Vue, {propsData}) {
    // vue 动态创建实例
    let Constructor = Vue.extend(ValidateTool)
    let validateTool = new Constructor({
        propsData
    })

    // 检测是否有要添加的自定义规则
    rules.forEach(rule => {
        validateTool.addRule(rule['fnName'], rule['fn'])
    })

    // 检测是否有要添加的公共规则
    publicRules.forEach(rule => {
        validateTool.addPublicRule(rule['fnName'], rule['fn'])
    })

    // 返回 validate 结果
    return validateTool.validateData()
}

let errors
let rules = []
let publicRules = []

export default {
    install(Vue, options) {
        Vue.prototype.$validate = function (validateToolOptions) {
            errors = createValidateTool(Vue, {propsData: validateToolOptions})
            return errors
        }
        Vue.prototype.$addRule = function (fnName, fn) {
            rules.push({fnName, fn})
        }
        Vue.prototype.$addPublicRule = function (fnName, fn) {
            publicRules.push({fnName, fn})
        }
    }
}