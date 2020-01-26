export default function validate(data, rules) {
    let errors = {}
    // 用rule遍历data
    rules.forEach(rule => {
        let value = data[rule.key]
        if (rule.required) {
            let err = validate.required(value)
            if (err) {
                ensureObject(errors, rule.key)
                errors[rule.key]['required'] = err
                return;
            }
        }

        let ruleTypes = Object.keys(rule).filter(item => item !== 'required' && item !== 'key')
        ruleTypes.forEach(type => {
                if (!validate[type]) {
                    throw `不存在的校验器:${type}`
                }


                let err = validate[type](value, rule[type])
                if (err) {
                    ensureObject(errors, rule.key)
                    errors[rule.key][type] = err
                }
            }
        )
    })
    return errors
}

validate.required = function (value) {
    if (!value && value !== 0) {
        return '必填'
    }
}

validate.pattern = function (value, pattern) {
    pattern = /^.+@.+$/
    if (!pattern.test(value)) {
        return '格式不正确'
    }
}

validate.minLength = function (value, minLength) {
    if (value.length < minLength) {
        return '太短'
    }
}

function ensureObject(obj, key) {
    if (typeof obj[key] !== 'object') {
        obj[key] = {}
    }
}