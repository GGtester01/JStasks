const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`multiply method positive scenario`, function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator(4, 5);
  });
  afterEach(function() {
    validator = null;
  });
  // eslint-disable-next-line max-len
  it(`should return the result of multiplication of 2 given numbers if provided with numbers`, function() {
    expect(validator.multiply()).to.be.equal(20);
  });
});


describe(`multiply method negative scenario`, function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator('lklk', 5);
  });
  afterEach(function() {
    validator = null;
  });
  // eslint-disable-next-line max-len
  it(`should throw an error when not provided with a number`, function() {
    expect(validator.multiply()).to.throw(Error, 'Please provide numbers');
  });
});
