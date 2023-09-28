const { expect } = require('chai');
const Generate = require('../../src/logic/Generate');
const { describe, it } = require('mocha');

describe('Função generateCode', () => {
  it('retorna um codigo aleatorio', () => {
    const result = Generate.generateCode();

    expect(result).to.be.a('string');
    expect(result).to.have.lengthOf(5);
  })
})