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
    assert.strictEqual(5, 4 + 1);
  })

  it('it should subtract numbers', function() {
    assert.strictEqual(3, 7-4);
  })

  it('it should multiply numbers', function() {
    assert.strictEqual(15, 3 * 5);
  })

  it('it should divide numbers', function() {
    assert.strictEqual(3, 21 / 7);
  })

  it('it should concatenate multiple number button clicks', function() {
    assert.
  })

});
