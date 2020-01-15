import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'
const {expect} = chai;
import Vue from 'vue'

import Input from '../../src/components/input/input'

Vue.config.productionTip = false
Vue.config.devtools = false


/**
 * 注意以下操作的inputElement不是index.html里的元素g-input，而是input.vue的template里的元素input
 * 所以 inputElement.value 对应的是<input type="text" :value=value />
 *     inputElement.disabled 对应的是<input type="text" :disabled="disabled"/>
 */


describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.exist
    })

    describe('props', () => {
        it('接收 value', () => {

            const wrapper = mount(Input, {
                propsData: {
                    value: 'input的value'
                }
            })
            // 不知道怎么用 wrapper 获取 input.value
            const inputElement =wrapper.vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('input的value')
        })

        it('接收 disabled', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            })
            const inputElement = wrapper.vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        //
        it('接收 readonly', () => {
            const wrapper = mount(Input, {
                propsData: {
                    readonly: true
                }
            })
            const inputElement = wrapper.vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)

        })

        it('接收 error', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: 'something wrong'
                }
            })
            // 检测 icon
            const useElement = wrapper.vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            // 检测 errorMessage
            const errorMessage = wrapper.vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('something wrong')
        })
    })

    describe('事件', () => {

        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                    const callback = sinon.fake();
                    const wrapper = mount(Input,{
                        listeners:{
                            eventName:callback
                        }
                    })
                    let event = new Event(eventName);
                    Object.defineProperty(
                        event, 'target', {
                            value: {value: 'hi'}, enumerable: true
                        }
                    )
                    let inputElement=wrapper.find('input')
                    inputElement.trigger(eventName)
                    expect(callback.calledWith(event.target))
                })
        })
    })
})

