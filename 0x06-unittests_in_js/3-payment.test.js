const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const calculatenumberspy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(calculatenumberspy.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculatenumberspy.callCount).to.be.equal(1);
    calculatenumberspy.restore();
  });
});
