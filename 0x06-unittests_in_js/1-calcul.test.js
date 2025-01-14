const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should add two numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 3.7, 2.5), 7);
  });

  it('should subtract two numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 2.5), 1);
  });

  it('should divide two numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.5), 3);
  });

  it('should return Error when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 0), 'Error');
  });

});
