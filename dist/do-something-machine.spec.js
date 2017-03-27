"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const do_something_machine_1 = require("./do-something-machine");
describe('DoSomethingMachine', () => {
    let doSomethingMachine;
    beforeEach(() => {
        doSomethingMachine = new do_something_machine_1.DoSomethingMachine();
    });
    describe('#doIt', () => {
        it('should return "Oh Yeah"', () => {
            chai_1.expect(doSomethingMachine.doIt()).to.eql("Oh Yeah");
        });
    });
});
