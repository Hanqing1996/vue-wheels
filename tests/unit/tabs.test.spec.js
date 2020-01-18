import chai from 'chai'
import {mount, createLocalVue} from '@vue/test-utils'

const {expect} = chai;
import Vue from 'vue'

import Tabs from '../../src/components/tabs/tabs'
import TabsHead from '../../src/components/tabs/tabs-head'
import TabsBody from '../../src/components/tabs/tabs-body'
import TabsItem from '../../src/components/tabs/tabs-item'
import TabsPane from '../../src/components/tabs/tabs-pane'

import sinonChai from 'sinon-chai'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('g-tabs', Tabs)

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    describe('props', () => {

        it('接收 selected ', (done) => {
            const localVue = createLocalVue()
            localVue.component('g-tabs-head', TabsHead)
            localVue.component('g-tabs-head', TabsHead)
            localVue.component('g-tabs-body', TabsBody)
            localVue.component('g-tabs-item', TabsItem)
            localVue.component('g-tabs-pane', TabsPane)

            const wrapper = mount(Tabs, {
                attachToDocument: true,
                propsData: {
                    selected: 'military'
                },
                slots: {
                    default: `            
            <g-tabs-head>
                <g-tabs-item name="military">军事</g-tabs-item>
                <g-tabs-item name="finance">财经</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="military">军事新闻</g-tabs-pane>
                <g-tabs-pane name="finance">财经新闻</g-tabs-pane>
                <g-tabs-pane name="sports">体育新闻</g-tabs-pane>
            </g-tabs-body>`
                },
                localVue
            })
            setTimeout(() => {
                expect(wrapper.element.querySelectorAll('.tabs-item')[0].textContent).to.equal('军事');
                done()
            })
        });
    })


})

