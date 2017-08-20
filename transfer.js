var IOTA = require('/Users/rajiv/iota.lib.js/lib/iota');
// Create IOTA instance with host and port as provider
var iota = new IOTA({
                    'host': 'http://rajiv-shah.ddns.net',
                    'port': 14265
                    });

//var seed = "";




//function setSeed() {
//    seed = document.getElementById('seedHTML');
//    console.log(seed);
//};

function printSeed(seedHTML) {
    console.log(seedHTML);
}


function generateAddresses() {

    for (i = 0; i < 1; i++) {
        iota.api.getNewAddress(seed.toUpperCase(), {'index': 0, 'total': 5}, function(_, addresses) {

                               getBalance(addresses); //Calls the getBalance function with all generated addresses as argument

                               });
    };
};
function getBalance(addresses) {
    iota.api.getBalances(addresses, 100, function(error, inputs) {
                         var i = 0;
                         var totalValue = 0;
                         if(inputs != null && inputs.balances != null) {
                         inputs.balances.forEach(function(balance) {
                                                 totalValue += parseInt(balance);
                                                 if (parseInt(balance) > 0) {
                                                 console.log(i+1 + " The address " + addresses[i] + " has a balance of: " + parseInt(balance));
                                                 console.log("Balance detected!!!");
                                                 } else {
                                                 console.log(i+1 + " The address " + addresses[i] + " has a balance of: " + parseInt(balance));
                                                 };
                                                 i++
                                                 })
                         } else {
                         console.log(error);
                         }
                         console.log("All addresses of this seeds contain " + totalValue + " tokens!")
                         });
}
