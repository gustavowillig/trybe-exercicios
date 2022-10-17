// const fetch = require('node-fetch');

const fetchCoins = async () => {
  try {
    const url = 'https://api.coincap.io/v2/assets';
    const coins = await fetch(url);
    const coinsTratadas = await coins.json();
    return coinsTratadas;
  } catch (error) {
    console.log('Error', error);
  }
  // console.log(stringCerta);
};
async function fazerLista() {
  const coinsTratadasLista = await fetchCoins();
  const primeirasDezCoinsTratadas = coinsTratadasLista.data.slice(0, 10);
  const stringCerta = primeirasDezCoinsTratadas
  .map(({ name, symbol, priceUsd }) => `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`);
  const listaMoedas = document.getElementById('coins-list');
  for (let index = 0; index < 10; index += 1) {
    const novoElemento = document.createElement('li');
    listaMoedas.appendChild(novoElemento);
    novoElemento.innerHTML = stringCerta[index];
  }
}

window.onload = (() => {
  // fetchCoins();
  fazerLista();
});