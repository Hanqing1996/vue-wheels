import sinon from "sinon";
import chai from 'chai'
import {createLocalVue, mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import Pager from '../../src/components/pager/pager'

import sinonChai from 'sinon-chai'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Pager', () => {
    it('存在.', () => {
        expect(Pager).to.exist
    })

    describe('props', () => {

        it('支持 currentPage 属性', (done) => {
            const wrapper = mount(Pager, {
                propsData: {
                    totalPage: 20,
                    currentPage:5
                },
            })
            setTimeout(() => {
                expect(wrapper.find('[data-page="5"].selected').exists()).to.be.true
                done()
            })
        })
    })

    describe('事件', () => {
        it('会触发 update:currentPage 事件', (done) => {
            const callback = sinon.fake();
            const wrapper = mount(Pager, {
                propsData: {
                    totalPage: 20,
                    currentPage:5
                },
                listeners: {
                    'update:currentPage': callback
                }
            })
            wrapper.find('[data-page="6"]').trigger('click')
            expect(callback).to.have.been.calledWith(6)
            done()
        })
    })
})