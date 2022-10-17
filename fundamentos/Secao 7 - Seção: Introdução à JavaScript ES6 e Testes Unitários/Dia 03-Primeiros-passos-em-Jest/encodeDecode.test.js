const {encode, decode} = require('./encodeDecode');

describe('Testando o exercício 4',() => {
    test('Teste se encode e decode são funções', () => {
      expect(typeof encode).toEqual('function');
    });

    test('Teste se encode e decode são funções', () => {
        expect(typeof decode).toEqual('function');
      });

      test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toEqual('12345');
      });
      test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('12345')).toEqual('aeiou');
      });
      test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('trybe').length).toEqual(5);
      });
      test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(decode('167824').length).toEqual(6);
      });
  });