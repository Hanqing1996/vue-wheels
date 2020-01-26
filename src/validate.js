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
        if (rule.pattern) {
            let err = validate.pattern(value,rule.pattern)
            if (err) {
                // 发现错误，才让 errors[rule.key]={},否则errors[rule.key]=undefined
                ensureObject(errors, rule.key)
                errors[rule.key]['pattern'] = err
            }
        }
        if (rule.minLength) {
            let err = validate.minLength(value,rule.minLength)
            if(err){
                ensureObject(errors, rule.key)
                errors[rule.key]['minLength'] = err
            }
        }
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