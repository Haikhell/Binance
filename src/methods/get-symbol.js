const request = require('../helpers/request');
const config = require('./config');

async function getSymbolCurrency(symbol) {
  let opt = {
    url: `${config.LINK}?symbol=${symbol}USDT`,
    timeout: 5000
  };
  let data = await (await request(opt)).data;
  return data;
}

module.exports = { getSymbolCurrency };
