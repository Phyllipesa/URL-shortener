const chai = require('chai');
const sinon = require('sinon');
const { describe, it } = require('mocha');
const Link = require('../../src/models/linkModel');
const linkService = require('../../src/service/linkService');
const { mockNewUrl, mockToDB, mockUrlCreated, code } = require('./mock/link.mock');
const Generate = require('../../src/logic/Generate');
const HttpError = require('../../src/util/httpError');

process.env.DOMAIN = 'http://localhost:3000/';

describe('Testando a linkService', () => { 
  describe('Rota /POST', () => {
    
    it('Recebe uma URL e retorna uma URL formatada', async () => {
      // arrange
      sinon
        .stub(Link, 'findOne')
        .resolves(null);

      sinon
        .stub(Link, 'create')
        .withArgs(mockToDB)
        .resolves(mockUrlCreated);

      sinon
        .stub(Generate, 'generateCode')
        .returns(code);
     
      // act
      const result = await linkService.createShortUrlService(mockUrlCreated.url);

      // assert
      chai.expect(result).to.deep.equal(mockNewUrl);
    }),

    it('Recebe uma URL, caso já exista no DB retorna a URL formatada', async () => {
      // arrange
      sinon
        .stub(Link, 'findOne')
        .returns(mockUrlCreated);     

      // act
      const result = await linkService.createShortUrlService(mockUrlCreated.url);

      // assert
      chai.expect(result).to.deep.equal(mockNewUrl);
    })
  })

  describe('Rota /GET', () => {
    it('Recebe uma URL formatada e retorna a URL padrão', async () => {
      // arrange
      const data = { 
        save: sinon.spy(),
        hits: 0,
        id: 1,
        url: "https://exemplo.exemplo/exemplo/exemplo/exemplo.html",
        code: "fxWEL"
      };

      sinon
        .stub(Link, 'findOne')
        .returns(data);

      // act
      const result = await linkService.getCodeService(code);

      // assert
      chai.expect(result).to.be.equal(data.url);
      chai.expect(data.save.calledOnce).to.be.true;
      chai.expect(data.hits).to.equal(1);
    }),

    it('Deve lançar um erro 404 se o código não existir', async () => {
      // arrange
      const invalidCode = "f148a"
      sinon
        .stub(Link, 'findOne')
        .returns(null);

      // act
      try {
        await linkService.getCodeService(invalidCode);
        
      } catch (error) {
        // assert
        chai.expect(error).to.be.an.instanceOf(HttpError);
        chai.expect(error.status).to.equal(404);
        chai.expect(error.message).to.equal('Not Found');
      }
    })
  })

  afterEach(() => {
    sinon.restore();
  });
})