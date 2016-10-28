import chai from 'chai';
const expect = chai.expect;

describe('unit tests', () => {
  describe('hello world', () => {
    it('test', done => {
      expect('hi').to.equal('hi');
      done();
    });
  })
})