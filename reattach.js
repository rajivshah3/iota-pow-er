var IOTA = require('./node_modules/iota.lib.js');
// Create IOTA instance with host and port as provider
var iota = new IOTA({
  'host': 'https://iotanode.us',
  'port': 443
});



global.reattachTx = function (txHash){
  document.getElementById("status").innerHTML = "Reattaching...";
  iota.api.replayBundle(txHash, 3, 14, function(e, s){
    if(s){
      document.getElementById("status").innerHTML = "Success!";
      console.log(s);
    }
    if(e){
      document.getElementById("status").innerHTML = "Error";
      console.log(e);
    }
  });
}
