import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import validate from '../../src/validate'

import sinonChai from 'sinon-chai'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('validate', () => {
    it('存在.', () => {
        expect(validate).to.exist
    })

    it('required true 报错', () => {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', required: true}
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    })

    it('required true 通过', () => {
        let data = {
            // 不是字符串'0'
            email: 0
        }
        let rules = [
            {key: 'email', required: true}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })

    // 注意这里只测试格式，没有测试required
    it('pattern email 报错', () => {
        let data = {
            email: '@frank.com'
        }
        let rules = [
            // 要求@前后有东西
            {key: 'email', pattern: 'email'}
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })

    it('pattern email 通过', () => {
        let data = {
            email: '1@frank.com'
        }
        let rules = [
            // 要求@前后有东西
            {key: 'email', pattern: 'email'}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })

    // required 优先级高于 pattern
    it('required & pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email', required: true}
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.eq('必填')
        expect(errors.email.pattern).to.not.exist
    })

    // minLength 与 pattern 优先级相同
    it('pattern & minLength', () => {
        let data = {
            email: '12'
        }
        let rules = [
            {key: 'email', pattern: 'email', required: true, minLength: 6}
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
        expect(errors.email.minLength).to.eq('太短')
    })
})