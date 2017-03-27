import {expect} from 'chai'
import {DoSomethingMachine} from './do-something-machine'

describe('DoSomethingMachine',() => {
    let doSomethingMachine:DoSomethingMachine
    beforeEach(( )=> {
        doSomethingMachine = new DoSomethingMachine()
    })
    describe('#doIt',() => {
        it('should return "Oh Yeah"', () => {
            expect(doSomethingMachine.doIt()).to.eql("Oh Yeah")
        })
    })
})