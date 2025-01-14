const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it('should add two numbers', function () {
    expect(calculateNumber('SUM', 3.7, 2.5)).to.equal(7);
  });

  it('should subtract two numbers', function () {
    expect(calculateNumber('SUBTRACT', 3.7, 2.5)).to.equal(1);
  });

  it('should divide two numbers', function () {
    expect(calculateNumber('DIVIDE', 8.4, 2.5)).to.equal(3);
  });

  it('should return Error when dividing by zero', function () {
    expect(calculateNumber('DIVIDE', 3.7, 0)).to.equal('Error');
  });

});
