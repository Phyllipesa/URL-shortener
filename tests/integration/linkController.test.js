const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;
const linkController = require('../../src/controllers/linkController')
const { describe, it } = require('mocha');
const HttpError = require('../../src/util/httpError');

describe('Testando a linkController', () => {
  // act
  let req, res, next;

  beforeEach(() => {
    req = {
      body: {
        url: null,
      },
    };

    next = sinon.stub();
  });

  it('Deve retornar um erro 400 se a URL é null', async () => {
    // act
    await linkController.createShortUrl(req, res, next);
      
    // assert
    expect(next.calledOnce).to.be.true;
    expect(next.firstCall.args[0]).to.be.instanceOf(HttpError);
    expect(next.firstCall.args[0].status).to.equal(400);
    expect(next.firstCall.args[0].message).to.equal('Invalid URL');
  });
})