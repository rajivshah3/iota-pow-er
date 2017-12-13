var IOTA = require('./node_modules/iota.lib.js');
// Create IOTA instance with host and port as provider
var iota = new IOTA({
  'host': 'http://iotanode.us:443',
  'port': 443
});



global.reattachTx = function (txHash){
  console.log(txHash);
  iota.api.getNodeInfo(function(e,s){console.log(s)});
  iota.api.replayBundle(txHash, 3, 14, function(e,s){console.log(s)});
  document.getElementById("status").innerHTML = "Reattaching...";
}
