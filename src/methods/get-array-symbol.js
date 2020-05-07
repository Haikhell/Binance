const request = require('../helpers/request');
const config = require('./config');

async function getSymbolCurrency(arraySymbol) {
  let arrayData = [];
  for (let i = 0; i < arraySymbol.length; i++) {
    let opt = {
      url: `${config.LINK}?${arraySymbol[i]}USDT`,
      timeout: 5000
    };
    let data = await (await request(opt)).data;
    arrayData.push(data);
  }

  return arrayData;
}

module.exports = { getSymbolCurrency };
