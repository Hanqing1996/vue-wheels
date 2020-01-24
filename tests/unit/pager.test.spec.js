import sinon from "sinon";
import chai from 'chai'
import {createLocalVue, mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import Pager from '../../src/components/pager/pager'

import sinonChai from 'sinon-chai'
import NavItem from "../../src/components/nav/nav-item";
import SubNav from "../../src/components/nav/sub-nav";
import Nav from "../../src/components/nav/nav";

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Slides', () => {
    it('存在.', () => {
        expect(Pager).to.exist
    })

    describe('props', () => {

        it('支持 currentPage 属性', (done) => {
            Vue.component('g-nav-item', NavItem)
            Vue.component('g-sub-nav', SubNav)
            const wrapper = mount(Nav, {
                propsData: {
                    totalPage: 20,
                    currentPage:5
                },
            })
            setTimeout(() => {
                expect(wrapper.find('[data-index="5"].selected').exists()).to.be.true
                done()
            })
        })
    })
})