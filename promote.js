var IOTA = require('iota.lib.js');
// Create IOTA instance with host and port as provider
var iota = new IOTA({
  'host': 'https://iotanode.us',
  'port': 443
});



global.promoteTx = function (txHash){
  document.getElementById("status").innerHTML = "Promoting...";
  const transfer = [{
    address: "RAJIV9PROMOTER9999999999999999999999999999999999999999999999999999999999999999999",
    value: 0,
    message: "CCFDPCBDGDPCRCHDXCCDBDEADDFDCDADCDHDTCFDEAPCJDPCXC9DPCQC9DTCEAPCHDEAWCHDHDDDGDDBTATAFDPCYCXCJDGDWCPCWCXASAVCXCHDWCIDQCSAXCCDTAXCCDHDPCRADDCDKDRATCFDTADDFDCDADCDHDTCSAWCHDAD9D",
    tag: "RAJIV9PROMOTER"
  }];

  iota.api.promoteTransaction(txHash, 3, 14, transfer, { interrupt: false, delay: 1000 }, function(e, s){
    if(s){
      document.getElementById("status").innerHTML = "Success!";
      console.log(s);
    }
    if(e){
      document.getElementById("status").innerHTML = "Error";
      console.log(s);
    }
  });
  function checkInclusion (err, isIncluded) {
    if (isIncluded) {
      params.interrupt = true
    } else {
      setTimeout(function () {iota.api.LatestInclusion(txHash, checkInclusion)}, checkDelay);
    }
  }

  iota.api.getLatestInclusion(txHash, checkInclusion);
}
