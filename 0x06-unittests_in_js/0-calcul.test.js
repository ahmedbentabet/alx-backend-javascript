const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 6 when inputs are 2.4 and 3.2', () => {
    assert.strictEqual(calculateNumber(2.4, 3.2), 5);
  });

  it('should return 5 when inputs are 1.8 and 3.1', () => {
    assert.strictEqual(calculateNumber(1.8, 3.1), 5);
  });
});
