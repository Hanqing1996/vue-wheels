import sinon from "sinon";
import chai from 'chai'
import {mount} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import Nav from '../../src/components/nav/nav'
import NavItem from '../../src/components/nav/nav-item'
import SubNav from '../../src/components/nav/sub-nav'

import sinonChai from 'sinon-chai'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Nav', () => {
    it('存在.', () => {
        expect(Nav).to.exist
    })

    describe('props', () => {
        const callback = sinon.fake();
        it('支持 selected 属性', (done) => {
            Vue.component('g-nav-item', NavItem)
            Vue.component('g-sub-nav', SubNav)
            const wrapper = mount(Nav, {
                propsData: {
                    selected: 'home'
                },
                slots: {
                    default: `
          <g-nav-item name="home">首页</g-nav-item>
          <g-sub-nav name="about">
            <template slot="title">关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
          </g-sub-nav>
        `
                }
            })
            setTimeout(() => {
                expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
                done()
            })
        })
    })

    describe('事件', () => {
        it('会触发 update:selected 事件', (done) => {
            Vue.component('g-nav-item', NavItem)
            Vue.component('g-sub-nav', SubNav)
            const callback = sinon.fake();
            const wrapper = mount(Nav, {
                propsData: {
                    selected: 'home'
                },
                slots: {
                    default: `
          <g-nav-item name="home">首页</g-nav-item>
          <g-sub-nav name="about">
            <template slot="title">关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>
            <g-nav-item name="developers">开发团队</g-nav-item>
          </g-sub-nav>
        `
                },
                listeners: {
                    'update:selected': callback
                }
            })
            wrapper.find('[data-name="developers"]').trigger('click')
            expect(callback).to.have.been.calledWith('developers')
            done()
        })
    })

})