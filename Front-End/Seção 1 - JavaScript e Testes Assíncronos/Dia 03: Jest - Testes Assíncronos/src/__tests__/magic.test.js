const { getMagicCard } = require('../magic');
// require('../../startest/mockSetup');

jest.setTimeout(10000);

describe('1 - Testes da função getMagicCard', () => {
  it('1.1 Verifique se getMagicCard é uma função.', async () => {
    // implemente seus testes aqui
    await expect(typeof getMagicCard).toBe('function');
  });

  it('1.2 Verifique se a função fetch foi chamada.', async () => {
    const resposta = await getMagicCard('130550');
    // implemente seus testes aqui
    // expect(resposta).toEqual({
    //   name: 'Ancestor\'s Chosen',
    //   manaCost: '{5}{W}{W}',
    //   types: ['Creature'],
    //   subtypes: ['Human', 'Cleric'],
    //   rarity: 'Uncommon',
    // });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
    const segundaResposta = await getMagicCard('130550');
    // implemente seus testes aqui
    const url = 'https://api.magicthegathering.io/v1/cards/130550';
    expect(fetch).toHaveBeenCalledWith(url);
  });
});

describe('2 - Testando o retorno da função getMagicCard', () => {
  it('2.1 Verifique se a carta retornada possui o nome Ancestor\'s Chosen.', async () => {
    const response = await getMagicCard('130550');
    // implemente seus testes aqui
    expect(response.name).toBe('Ancestor\'s Chosen');
  });
});
