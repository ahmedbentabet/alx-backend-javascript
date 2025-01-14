const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    // Create spy before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" for inputs 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 120');
  });

  it('should log "The total is: 20" for inputs 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 20');
  });
});
