const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function () {
  it('should use Utils.calculateNumber with SUM', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(150, 30);
    sinon.assert.calledWith(spy, 'SUM', 150, 30);
    spy.restore();
  });

  it('should use Utils.calculateNumber with different values', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(200, 10);
    sinon.assert.calledWith(spy, 'SUM', 200, 10);
    spy.restore();
  });
});
