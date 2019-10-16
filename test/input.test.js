import Vue from 'vue'
import Input from '../src/input'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false


/**
 * 注意以下操作的inputElement不是index.html里的元素g-input，而是input.vue的template里的元素input
 * 所以 inputElement.value 对应的是<input type="text" :value=value />
 *     inputElement.disabled 对应的是<input type="text" :disabled="disabled"/>
 */

describe('Button', () => {

    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        it('接收 value', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: 'input的value'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')

            expect(inputElement.value).to.equal('input的value')
            vm.$destroy()
        })
        it('接收 disabled', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')

            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        })
        it('接收 readonly', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            vm.$destroy()
        })
        it('接收 error', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error: 'something wrong'
                }
            }).$mount()
            // 检测 icon
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            // 检测 errorMessage
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('something wrong')
            vm.$destroy()
        })
    })

    describe('事件', () => {
        it('触发 change 事件', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
            }).$mount()

            const callback = sinon.fake();
            vm.$on('change', callback)
            vm.$el.querySelector('input').onchange
            expect(callback).to.have.been.called
        })
    })

})