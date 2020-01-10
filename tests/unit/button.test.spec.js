import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import Button from '../../src/components/button/button'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe 和 it 來自 mocha
// expect 来自 chai
describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.exist // 不是假值，就不报错
    })
    describe('props', () => {

        it('可以设置icon.', () => {
            // 现在挂载组件，你便得到了这个包裹器
            const wrapper = mount(Button, {
                propsData: {
                    icon: 'settings'
                }
            })
            const useElement = wrapper.find('use')
            expect(useElement.attributes('href')).to.equal('#i-settings')
        })

        it('可以设置loading.', () => {
            const wrapper = mount(Button, {
                propsData: {
                    icon: 'settings',
                    loading: true
                }
            })
            const useElements = wrapper.find('use')
            expect(useElements.attributes('href')).to.equal('#i-loading')
        })

        it('icon 默认的 order 是 1', () => {
            const wrapper = mount(Button, {
                attachToDocument: true,
                propsData: {
                    icon: 'settings',
                }
            })
            const icon = wrapper.find('svg').vm.$el
            expect(getComputedStyle(icon).order).to.eq('1')
        })

        it('设置 iconPosition 可以改变 order', () => {
            const wrapper = mount(Button, {
                attachToDocument: true,
                propsData: {
                    icon: 'settings',
                    iconPosition: 'right'
                }
            })
            const icon = wrapper.find('svg').vm.$el
            expect(getComputedStyle(icon).order).to.eq('2')
        })
    })

    describe('事件', () => {

        it('点击 button 触发 touch 事件', () => {
            const wrapper = mount(Button, {
                propsData: {
                    icon: 'settings'
                }
            })
            const button = wrapper.find('button')
            const callback = sinon.fake();
            // 为组件实例设置监听事件
            button.vm.$on('click1', callback)
            //触发click 事件
            button.trigger('click')
            expect(callback.calledOnce);
        })
    })
})