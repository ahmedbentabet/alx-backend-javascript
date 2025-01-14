const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 6 when inputs are 3.4 and 3.2', () => {
    assert.strictEqual(calculateNumber(3.4, 3.2), 6);
  });

  it('should return 6 when inputs are 2.8 and 3.1', () => {
    assert.strictEqual(calculateNumber(2.8, 3.1), 6);
  });
});
