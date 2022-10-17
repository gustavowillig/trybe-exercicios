const sum = require('./sum');

describe('Testando o exercício 1',() => {
  test('Testa soma de 4 e 5 igual a 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  test('Testa soma de 0 e 0 igual a 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  test('Testa soma de 4 e 5 string vai dar erro', () => {
    expect(() => sum(4,'5')).toThrow(Error);
  });

  test('Testa soma de 4 e 5 string vai dar mensagem de erro', () => {
    expect(() => sum(4,'5')).toThrowError(new Error('parameters must be numbers'));
  });
});