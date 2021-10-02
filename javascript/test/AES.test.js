const assert = require('assert');

// import AES file
const AES = require('../AES');

describe('AES.js tests', () => {
    describe('AES.add() Test', () => {
        it('should equal 2', () => {
            const result = AES.Decrypt("l2R0cir0iwTT/CXW/ZY8VA==", "salamMRezaHajjar");
            assert.equal(result,"l2R0cir0iwTT/CXW/ZY8VA=="+"salamMRezaHajjar");
        });
        
    });
    
    describe('AES.multiply() Test', () => {
        it('should equal 3', () => {
            const result = AES.multiply(3, 1);
            assert.equal(result,3);
        });
        it('should equal 10', () => {
            const result = AES.multiply(5, 2);
            assert.equal(result,10);
        });
    });
});