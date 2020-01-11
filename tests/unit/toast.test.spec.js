import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'
const {expect} = chai;
import Vue from 'vue'

import Toast from '../../src/components/toast/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

// toast.test.js里的代码和plugin.js是完全分离的，没有任何关系
describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.exist
    })

    describe('props', () => {

        it('toast 接受 autoClose　属性', (done) => {
            const wrapper = mount(Toast, {
                propsData: {
                    autoClose: 1
                },
            })
            // 确保在vm.execAutoClose执行后再去判断vm.$el是否被移出document.body
            setTimeout(() => {
                // 判断vm.$el是否被移出document.body
                expect(document.body.contains(wrapper.element)).to.equal(false)
                done()
            }, wrapper.props('autoClose') * 1000)
        })

        // 这个测试中,vm.$el不需要放入文档(取元素是用vm.$el.querySelector)
        it('toast 接受 closeButton', () => {
            const callback = sinon.fake()
            const wrapper = mount(Toast, {
                propsData: {
                    closeButton: {
                        text: '测试text',
                        callback // sionon的callback,方便expect
                    },
                },
            })
            let closeButton=wrapper.find('.close')
            expect(closeButton.text()).to.equal('测试text');
            closeButton.trigger('click')
            expect(callback.calledOnce);
        })

        // 这里不知道怎么在mount的slots中注入html，所以保持了原来的方法
        it('toast 接受 enableHTML', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true
                }
            })
            vm.$slots.default = ['这是<strong>测试<strong>信息']
            vm.$mount()
            //能通过文本选择器选到标签,就说明测试成功
            expect(vm.$el.hasChildNodes('strong')).to.equal(true)

        })

        it('toast 接受 position', () => {
            const wrapper = mount(Toast, {
                propsData: {
                    position: 'middle'
                },
            })
            expect(wrapper.classes().includes('position-middle')).to.equal(true)
        })

    })
})