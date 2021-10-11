import CryptoES from 'crypto-es';

const AES = {};
export function  Encrypt(plainText,passPhrase){

//const salt = CryptoES.enc.Utf8.parse('salamMRezaHajjar');
const salt =CryptoES.lib.WordArray.random(128/8);
const key = CryptoES.PBKDF2(passPhrase, salt, { keySize: 128/32, iterations: 1000 });
//const iv = CryptoES.enc.Utf8.parse('salamMRezaHajjar');
const iv = CryptoES.lib.WordArray.random(128/8);

//const base64_iv = CryptoES.enc.Base64.stringify(iv.words);

const encrypted = CryptoES.AES.encrypt(plainText,  key, { iv: iv }, { mode: CryptoES.mode.CBC, padding: CryptoES.pad.Pkcs7 });
console.log(encrypted.iv.words);
console.log(salt.words);


let arrs = [salt.words,encrypted.iv.words,encrypted.ciphertext.words];
arrs=arrs.reduce((a, b) => [...a, ...b], []);
console.log(arrs);

const words = CryptoES.lib.WordArray.create(arrs);
const base64 = CryptoES.enc.Base64.stringify(words);


console.log("encrypted as base264: "+base64);
return base64;
};

export function  Decrypt(cipherText,passPhrase){
  const encrypted_wordArrray=CryptoES.enc.Base64.parse(cipherText)
  const salt_words =encrypted_wordArrray.words.slice(0,4);
  const iv_words =encrypted_wordArrray.words.slice(4,8);
  const main=encrypted_wordArrray.words.slice(-8);
  const main_base64 = CryptoES.enc.Base64.stringify(CryptoES.lib.WordArray.create(main));
  
  const key_words = CryptoES.PBKDF2(passPhrase, CryptoES.lib.WordArray.create(salt_words), { keySize: 128/32, iterations: 1000 });
  
  
  
  var decrypted = CryptoES.AES.decrypt(main_base64,key_words, { iv: CryptoES.lib.WordArray.create(iv_words) });
  console.log("decrypted as latin: "+CryptoES.enc.Latin1.stringify(decrypted));
return CryptoES.enc.Latin1.stringify(decrypted);
};

export default AES;