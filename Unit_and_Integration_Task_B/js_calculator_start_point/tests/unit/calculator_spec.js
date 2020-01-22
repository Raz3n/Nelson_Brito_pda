var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  })

  it('it should add numbers', function(){
    calculator.previousTotal = 4;
        calculator.add(1);
        assert.deepStrictEqual(5, calculator.runningTotal);  })

  it('it should subtract numbers', function() {
    calculator.previousTotal = 7;
        calculator.subtract(4);
        assert.deepStrictEqual(3, calculator.runningTotal);  })

  it('it should multiply numbers', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.deepStrictEqual(15, calculator.runningTotal);
  })

  it('it should divide numbers', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.deepStrictEqual(3, calculator.runningTotal);
  })

  it('it should concatenate multiple number button clicks', function() {
    calculator.numberClick(4);
    calculator.numberClick(5);
    calculator.numberClick(4);
    assert.deepStrictEqual(454, calculator.runningTotal);
  })

  it('it should chain multiple operations together', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.deepStrictEqual(12, calculator.runningTotal);
  })

});
