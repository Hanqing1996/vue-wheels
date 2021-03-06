import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import Button from '../../src/components/button/button'

import sinonChai from 'sinon-chai'
chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

// describe 和 it 來自 mocha
// expect 来自 chai
describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.exist // 不是假值，就不报错
    })
    describe('props', () => {

        it('接受 icon.', () => {
            // 现在挂载组件，你便得到了这个包裹器
            const wrapper = mount(Button, {
                propsData: {
                    icon: 'settings'
                }
            })
            const useElement = wrapper.find('use')
            expect(useElement.attributes('href')).to.equal('#i-settings')
        })

        it('接受 loading.', () => {
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

        it('接受 iconPosition', () => {
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
        const callback = sinon.fake();
        it('点击 button 触发 touch 事件', () => {
            const wrapper = mount(Button, {
                propsData: {
                    icon: 'settings'
                },
                //为组件实例设置监听事件
                listeners:{
                    'click':callback
                }
            })
            const button = wrapper.find('button')
            //触发click 事件
            button.trigger('click')
            expect(callback.calledOnce);
        })
    })
})