// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var networkTwoCode = cardNumber.slice(0,2);
  var networkThreeCode = cardNumber.slice(0,3);
  var networkFourCode = cardNumber.slice(0,4);
  var networkSixCode = cardNumber.slice(0,6);
  var network = '';

  var DinersClubCodes = ['38','39'];
  var AmericanExpressCodes = ['34','37'];
  var MasterCardCodes = ['51','52','53','54','55'];
  var DiscoverCodes = ['6011','644','645','646','647','648','649','65'];
  var MaestroCodes = ['5018','5020','5038','6304'];
  var ChinaUnionPayCodes = ['624','625','626','6282','6283','6284','6285',
                    '6286','6287','6288']; // 622126-622925
  var SwitchCode = ['4903','4905','4911','4936','564182','633110',
                    '6333','6759'];

  var VisaLength = [13,16,19];
  var DiscoverLength = [16,19];
  var MaestroLength = [12,13,14,15,16,17,18,19];
  var ChinaUnionPayLength = [16,17,18,19];
  var SwitchLength = [16,18,19];

    // Diner's Club
  if (DinersClubCodes.includes(networkTwoCode)) {
    network = cardNumber.length === 14 ? "Diner's Club" : null;
    // American Express
  } else if (AmericanExpressCodes.includes(networkTwoCode)) {
      network = cardNumber.length === 15 ? "American Express" : null;
    // Switch
  } else if(SwitchCode.includes(networkFourCode) ||
            SwitchCode.includes(networkSixCode)) {
      network = SwitchLength.includes(cardNumber.length) ? 'Switch' : null;
    // Visa
  } else if (cardNumber[0] === '4' && network !== 'Switch') {
      network = VisaLength.includes(cardNumber.length) ? 'Visa' : null;
    // MasterCard
  } else if (MasterCardCodes.includes(networkTwoCode)) {
      network = cardNumber.length === 16 ? "MasterCard" : null;
    // Discover
  } else if (DiscoverCodes.includes(networkTwoCode) ||
             DiscoverCodes.includes(networkThreeCode) ||
             DiscoverCodes.includes(networkFourCode)) {
      network = DiscoverLength.includes(cardNumber.length) ? 'Discover' : null;
    // Maestro
  } else if (MaestroCodes.includes(networkFourCode)) {
      network = MaestroLength.includes(cardNumber.length) ? 'Maestro' : null;
    // China UnionPay
  } else if((networkSixCode >= 622126 && networkSixCode <= 622925) ||
             ChinaUnionPayCodes.includes(networkThreeCode) ||
             ChinaUnionPayCodes.includes(networkFourCode)) {
      network = ChinaUnionPayLength.includes(cardNumber.length) ? 'China UnionPay' : null;
  }

  return network;
};

// console.log(detectNetwork('38345678901234'));
// console.log(detectNetwork('39345678901234'));
// =>(Diner's Club)
// console.log(detectNetwork('343456789012345'));
// console.log(detectNetwork('373456789012345'));
// => (American Express)
// console.log(detectNetwork('4123456789012'));
// console.log(detectNetwork('4123456789012345'));
// console.log(detectNetwork('4123456789012345678'));
// => (Visa)
// console.log(detectNetwork('5112345678901234'));
// console.log(detectNetwork('5212345678901234'));
// console.log(detectNetwork('5312345678901234'));
// console.log(detectNetwork('5412345678901234'));
// console.log(detectNetwork('5512345678901234'));
// => (MasterCard)
// console.log(detectNetwork('6011567890123456'));
// console.log(detectNetwork('6011567890123456789'));
// console.log(detectNetwork('6511567890123456'));
// console.log(detectNetwork('6511567890123456789'));
// console.log(detectNetwork('6464567890123456'));
// console.log(detectNetwork('6464567890123456789'));
// => (Discover)
// console.log(detectNetwork('501856789012'));
// console.log(detectNetwork('5020567890123456789'));
// console.log(detectNetwork('503856789012'));
// console.log(detectNetwork('6304567890123456789'));
// => (Maestro)
// console.log(detectNetwork('6244567890123456'));
// console.log(detectNetwork('6221267890123456'));
// console.log(detectNetwork('62233378901234567'));
// console.log(detectNetwork('62292378901234567'));
// => (China UnionPay)
// console.log(detectNetwork('4903567890123456'));
// console.log(detectNetwork('564182789012345678'));
// console.log(detectNetwork('6759567890123456789'));
// console.log(detectNetwork('6759567890123456789'));
// => (Switch)
