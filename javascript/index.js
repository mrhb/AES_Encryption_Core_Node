const AES = require('./AES');
var Enc=AES.Encrypt("Plain text input to Nodejs ", "salamMRezaHajjar");
console.log("Encrypted in Node: "+Enc);
var decFromNode=AES.Decrypt(Enc, "salamMRezaHajjar");
console.log("Decrypted From Node: "+decFromNode);
var dec=AES.Decrypt("aiNKr9aehhBKbsc3mclkEJprvxFMSIK+xOwlUkKj7ovrTnLDeDjWc0OmQRBw7cRdVRLOyjOxHmcLbddawKhw9g==", "salamMRezaHajjar");
console.log("Decrypted From Core: "+dec);