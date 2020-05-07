const get = require('./methods');

(async () => {
  console.log(await get.get.getTopCurrency());
  console.log(await get.getSymbol.getSymbolCurrency('BTC'));
  console.log(await get.getArraySymbol.getSymbolCurrency([ 'BTC', 'EOS' ]));
})();
