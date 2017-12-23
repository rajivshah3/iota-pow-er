var IOTA = require('iota.lib.js');
var iota = new IOTA({
  'provider': 'https://iotanode.us:443'
});



global.promoteTx = function (txHash){
  var count = 0;
  const MAX_PROMOTIONS = 3;
  document.getElementById("status").innerHTML = `Promoting...${count} of ${MAX_PROMOTIONS}`;
  const transfer = [{
    address: "RAJIV9PROMOTER9999999999999999999999999999999999999999999999999999999999999999999",
    value: 0,
    message: "CCFDPCBDGDPCRCHDXCCDBDEADDFDCDADCDHDTCFDEAPCJDPCXC9DPCQC9DTCEAPCHDEAWCHDHDDDGDDBTATAFDPCYCXCJDGDWCPCWCXASAVCXCHDWCIDQCSAXCCDTAXCCDHDPCRADDCDKDRATCFDTADDFDCDADCDHDTCSAWCHDAD9D",
    tag: "RAJIV9PROMOTER"
  }];

  var checkDelay = 15000;
  function interrupt() {
    console.log(count);
    document.getElementById("status").innerHTML = `Promoting...${count} of ${MAX_PROMOTIONS}`;
    return count++ >= MAX_PROMOTIONS;
  }
  var params = { interrupt, delay: 1000 };
  iota.api.promoteTransaction(txHash, 3, 14, transfer, params, function(e, s){
    if(s){
      console.log(s);
      document.getElementById("status").innerHTML = "Success!";
    }
    if(e){
      document.getElementById("status").innerHTML = "Error";
      console.log(e);
    }
  });
  function checkInclusion (err, isIncluded) {
    if (isIncluded[0]) {
      console.log(isIncluded[0]);
      params.interrupt = true;
      document.getElementById("status").innerHTML = "Success!";
    } else {
      setTimeout(function () {
        iota.api.getLatestInclusion([txHash], checkInclusion)
      }, checkDelay);
    }
  }
  iota.api.getLatestInclusion([txHash], checkInclusion);
}
