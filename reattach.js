var IOTA = require('./lib/iota');
// Create IOTA instance with host and port as provider
var iota = new IOTA({
  'host': 'http://35.196.142.70',
  'port': 443
});


var txHash = "";


function reattachTx(txHash){
var quote = "'"
var quoted = quote.concat(txHash);
var quotedTxHash = quoted.concat(quote);
document.getElementById("status").innerHTML = "Reattaching..."
iota.api.replayBundle(quotedTxHash,
 3, 15, function(e,s){console.log(s)});

}


function setTxHash(txHash) {
  txHash = document.getElementById('reattachTxHash');
  reattachTx(txHash);
};

function onSubmit(token) {
  console.log("Success");
    setTxHash('reattachTxHash');
  };
