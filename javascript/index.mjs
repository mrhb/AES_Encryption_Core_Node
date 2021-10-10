import CryptoES from 'crypto-es';


const passPhrase="salamMRezaHajjar";
const cipherText="aiNKr9aehhBKbsc3mclkEJprvxFMSIK+xOwlUkKj7ovrTnLDeDjWc0OmQRBw7cRdVRLOyjOxHmcLbddawKhw9g==";





const salt = CryptoES.enc.Utf8.parse('salamMRezaHajjar');
const key = CryptoES.PBKDF2(passPhrase, salt, { keySize: 128/32, iterations: 1000 });
const iv = CryptoES.enc.Utf8.parse('salamMRezaHajjar');

//const base64_iv = CryptoES.enc.Base64.stringify(iv.words);

const encrypted = CryptoES.AES.encrypt("Plain text input to Nodejs ",  key, { iv: iv }, { mode: CryptoES.mode.CBC, padding: CryptoES.pad.Pkcs7 });
console.log(encrypted.iv.words);


let arrs = [salt.words,encrypted.iv.words,encrypted.ciphertext.words];
arrs=arrs.reduce((a, b) => [...a, ...b], []);
//console.log(arrs);

const words = CryptoES.lib.WordArray.create(arrs);
const base64 = CryptoES.enc.Base64.stringify(words);


console.log("encrypted as base264: "+base64);


const iv_words =CryptoES.enc.Base64.parse(base64).words;
const decrypted = CryptoES.AES.decrypt(encrypted,key, { iv: CryptoES.lib.WordArray.create(iv_words.slice(0,4)) });
console.log("decrypted as latin: "+CryptoES.enc.Latin1.stringify(decrypted));

