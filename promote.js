var IOTA = require('iota.lib.js');
// Create IOTA instance with host and port as provider
var iota = new IOTA({
  'provider': 'https://iotanode.us:443'
});



global.promoteTx = function (txHash){
  document.getElementById("status").innerHTML = "Promoting...";
  const transfer = [{
    address: "RAJIV9PROMOTER9999999999999999999999999999999999999999999999999999999999999999999",
    value: 0,
    message: "CCFDPCBDGDPCRCHDXCCDBDEADDFDCDADCDHDTCFDEAPCJDPCXC9DPCQC9DTCEAPCHDEAWCHDHDDDGDDBTATAFDPCYCXCJDGDWCPCWCXASAVCXCHDWCIDQCSAXCCDTAXCCDHDPCRADDCDKDRATCFDTADDFDCDADCDHDTCSAWCHDAD9D",
    tag: "RAJIV9PROMOTER"
  }];

var checkDelay = 15000;
var params = { interrupt: false, delay: 1000 };
console.log(iota.api.isPromotable([txHash]));
  iota.api.promoteTransaction(txHash, 3, 14, transfer, params, function(e, s){
    if(s){
      document.getElementById("status").innerHTML = "Success!";
      console.log(s);
    }
    if(e){
      document.getElementById("status").innerHTML = "Error";
      console.log(e);
    }
  });
  function checkInclusion (err, isIncluded) {
    if (isIncluded) {
      params.interrupt = true
    } else {
      setTimeout(function () {iota.api.getLatestInclusion([txHash], checkInclusion)}, checkDelay);
    }
  }

  iota.api.getLatestInclusion([txHash], checkInclusion);
}
