export default class Validator {

    // 添加公共方法
    add(newType, fn) {
        Validator.prototype[newType] = fn
    }

    required(value) {
        if (!value && value !== 0) {
            return '必填'
        }
    };

    pattern(value, pattern) {
        pattern = /^.+@.+$/
        if (!pattern.test(value)) {
            return '格式不正确'
        }
    };

    minLength(value, minLength) {
        if (value.length < minLength) {
            return '太短'
        }
    }

    validate(data, rules) {
        let errors = {}
        // 用rule遍历data
        rules.forEach(rule => {
            let value = data[rule.key]
            if (rule.required) {
                let err = this.required(value)
                if (err) {
                    ensureObject(errors, rule.key)
                    errors[rule.key]['required'] = err
                    return;
                }
            }

            let ruleTypes = Object.keys(rule).filter(item => item !== 'required' && item !== 'key')
            ruleTypes.forEach(type => {
                    if (!this[type]) {
                        throw `不存在的校验器:${type}`
                    }

                    let err = this[type](value, rule[type])
                    if (err) {
                        ensureObject(errors, rule.key)
                        errors[rule.key][type] = err
                    }
                }
            )
        })
        return errors

    }
}

function ensureObject(obj, key) {
    if (typeof obj[key] !== 'object') {
        obj[key] = {}
    }
}