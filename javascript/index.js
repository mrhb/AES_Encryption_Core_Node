const AES = require('./AES');
var Enc=AES.Encrypt("asdfafe", "salamMRezaHajjar");
console.log(Enc);
//Enc=
var dec=AES.Decrypt(Enc, "salamMRezaHajjar");
console.log(dec);