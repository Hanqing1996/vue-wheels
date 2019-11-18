const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'
// import Icon from '../src/icon'

Vue.config.productionTip = false
Vue.config.devtools = false

// Vue.component('g-button', Button)
// Vue.component('g-icon', Icon)

// describe 和 it 來自 mocha
// expect 来自 chai
describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.exist // 不是假值，就不报错
    })
    describe('props', () => {

        const Constructor = Vue.extend(Button)
        let vm = new Constructor({})
        afterEach(() => {
            vm.$destroy()
        })

        it('可以设置icon.', () => {

            // 通过Constructor生成一个vue实例
            vm = new Constructor({
                propsData: {
                    icon: 'settings'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
            vm.$destroy()
        })
        it('可以设置loading.', () => {
            const vm = new Constructor({
                propsData: {
                    icon: 'settings',
                    loading: true
                }
            }).$mount()
            const useElements = vm.$el.querySelectorAll('use')
            expect(useElements.length).to.equal(1)
            expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
            vm.$destroy()
        })
        it('icon 默认的 order 是 1', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    icon: 'settings',
                }
            }).$mount(div)
            const icon = vm.$el.querySelector('svg')
            expect(getComputedStyle(icon).order).to.eq('1')
            vm.$el.remove()
            vm.$destroy()
        })
        it('设置 iconPosition 可以改变 order', () => {


            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    icon: 'settings',
                    iconPosition: 'right'
                }
            }).$mount(div)

            const icon = vm.$el.querySelector('svg')
            expect(getComputedStyle(icon).order).to.eq('2')
            vm.$el.remove()
            vm.$destroy()
        })
    })

    describe('事件', () => {

        const Constructor = Vue.extend(Button)

        let vm = new Constructor({})
        afterEach(function () {
            vm.$destroy()
        })

        it('点击 button 触发 touch 事件', () => {
            vm = new Constructor({
                propsData: {
                    icon: 'settings',
                }
            }).$mount()

            const callback = sinon.fake();
            vm.$on('click', callback)

            //触发 button 的 click 事件.以下代码等效于 vm.$el.click()
            let event = new Event('click');
            let buttonElement = vm.$el
            buttonElement.dispatchEvent(event)

            // vm.$el.click()
            expect(callback).to.have.been.called
        })
    })
})