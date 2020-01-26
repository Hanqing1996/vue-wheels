export default function validate(data,rules) {
    let errors={}
    // 用rule遍历data
    rules.forEach(rule=>{
        let value=data[rule.key]
        if(rule.required){
            if(!value&&value!==0){
                ensureObject(errors,rule.key)
                errors[rule.key]['required']='必填'
                return errors
            }
        }
        if(rule.pattern){
            rule.pattern=/^.+@.+$/
            if(!rule.pattern.test(value)){
                // 发现错误，才让 errors[rule.key]={},否则errors[rule.key]=undefined
                ensureObject(errors,rule.key)
                errors[rule.key]['pattern']='格式不正确'
            }
        }
        if(rule.minLength){
            if(value.length<rule.minLength){
                ensureObject(errors,rule.key)
                errors[rule.key]['minLength']='太短'
            }
        }
    })
    return errors
}

function ensureObject(obj,key) {
    if(typeof obj[key] !=='object'){
        obj[key]={}
    }
}