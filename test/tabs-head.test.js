import Vue from 'vue'
import TabsHead from '../src/tabs-head'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsHead', () => {

    it('存在.', () => {
        expect(TabsHead).to.exist
    })
})
