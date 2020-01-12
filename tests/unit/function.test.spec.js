import chai from 'chai'
const {expect} = chai;

import fn from '../../src/function'

// 函数覆盖率，分支覆盖率测试
describe('function 测试',()=>{
    it('fn 存在', () => {
        expect(fn).to.exist
    })

    it('n<10分支测试',()=>{
        expect(fn(3)).to.equals(4)
    })

    it('n>10分支测试',()=>{
        expect(fn(12)).to.equals(11)
    })
})