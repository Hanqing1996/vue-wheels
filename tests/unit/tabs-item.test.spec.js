import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'
const {expect} = chai;
import Vue from 'vue'

import TabsItem from '../../src/components/tabs/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

    it('存在.', () => {
        expect(TabsItem).to.exist
    })

    describe('props', () => {

        it('接收 name', () => {
            const wrapper = mount(TabsItem, {
                attachToDocument:true,
                propsData: {
                    name: 'testName',
                }
            })
            // 不要测vm.name,要测试DOM元素
            expect(wrapper.attributes('data-name')).to.eq('testName');
        })

        it('接收 disabled', () => {
            let callback=sinon.fake()
            const wrapper = mount(TabsItem, {
                attachToDocument:true,
                propsData: {
                    disabled:true
                },
                listeners:{
                    'click':callback
                }
            })
            // 测试　disabled 的　class
            expect(wrapper.classes().includes('disabled')).to.equal(true)
            wrapper.trigger('click')
            expect(callback.notCalled);
        })
    })
})
