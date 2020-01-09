import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'
const {expect} = chai;
import Vue from 'vue'
import Button from '../../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

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

        /**
         * css暂时忽略
         */
        //     it('icon 默认的 order 是 1', () => {
        //         const div = document.createElement('div')
        //         document.body.appendChild(div)
        //         vm = new Constructor({
        //             propsData: {
        //                 icon: 'settings',
        //             }
        //         }).$mount(div)
        //         const icon = vm.$el.querySelector('svg')
        //         expect(getComputedStyle(icon).order).to.eq('1')
        //         vm.$el.remove()
        //         vm.$destroy()
        //     })
        //     it('设置 iconPosition 可以改变 order', () => {
        //
        //
        //         const div = document.createElement('div')
        //         document.body.appendChild(div)
        //         vm = new Constructor({
        //             propsData: {
        //                 icon: 'settings',
        //                 iconPosition: 'right'
        //             }
        //         }).$mount(div)
        //
        //         const icon = vm.$el.querySelector('svg')
        //         expect(getComputedStyle(icon).order).to.eq('2')
        //         vm.$el.remove()
        //         vm.$destroy()
        //     })
        // })

        describe('事件', () => {

            // const Constructor = Vue.extend(Button)
            //
            // let vm = new Constructor({})
            // afterEach(function () {
            //     vm.$destroy()
            // })

            it('点击 button 触发 touch 事件', () => {

                const wrapper = mount(Button, {
                    propsData: {
                        icon: 'settings'
                    }
                })

                const button = wrapper.find('button')
                const callback = sinon.fake();
                // 为组件实例设置监听事件
                vm.$on('click1', callback)
                //触发click 事件
                button.trigger('click')
                expect(callback.calledOnce);
            })
        })
    })
})