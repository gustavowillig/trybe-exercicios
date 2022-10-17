const fetch = require('node-fetch');

const fetchCoin = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url);

  const resposta = await coins.json();

  console.log(resposta.data.slice(0,10));
};

fetchCoin();