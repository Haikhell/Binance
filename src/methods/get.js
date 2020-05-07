const request = require('../helpers/request');
const config = require('./config');
arrayCurrency = [ 'BTC', 'ETH', 'BNB', 'XRP', 'EOS' ];

async function getTopCurrency() {
  let arrayData = [];
  for (let i = 0; i < arrayCurrency.length; i++) {
    let opt = {
      url: `${config.LINK}?symbol=${arrayCurrency[i]}USDT`,
      timeout: 5000
    };
    let data = await (await request(opt)).data;
    arrayData.push(data);
  }
  return arrayData;
}
module.exports = { getTopCurrency };
