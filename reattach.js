var IOTA = require('./node_modules/iota.lib.js');
// Create IOTA instance with host and port as provider
var iota = new IOTA({
  'host': 'http://iotanode.us:443',
  'port': 443
});


var txHash = "";


global.reattachTx = function (txHash){
document.getElementById("status").innerHTML = "Reattaching...";
iota.api.replayBundle(txHash,
 3, 14, function(e,s){console.log(s)});
};
