const crypto = require('crypto');
const AES = {};
AES.add = (num1, num2) => num1 + num2;
AES.multiply = (num1, num2) => num1 * num2;


const DerivationIterations=1000;
AES.Encrypt=(plainText,passPhrase)=>{

    salt = Buffer.from('salamMRezaHajjar');//crypto.randomBytes(16);
    iv =Buffer.from('salamMRezaHajjar');// crypto.randomBytes(16);
    key = crypto.pbkdf2Sync(passPhrase, salt, 100000, 256/8, 'sha256');
    
    cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    
    cipher.write(plainText);
    cipher.end()
    
    encrypted = cipher.read();
    console.log({
      iv:iv.toString('base64'),
      salt: salt.toString('base64'),
      encrypted: encrypted.toString('base64'),
      concatenned: Buffer.concat([salt, iv, encrypted]).toString('base64')
    });
return Buffer.concat([salt, iv, encrypted]).toString('base64');
};

AES.Decrypt=(cipherText,passPhrase)=>{
    encrypted = Buffer.from(cipherText, 'base64');
const salt_len = iv_len = 16;

salt = encrypted.slice(0, salt_len);
iv = encrypted.slice(0+salt_len, salt_len+iv_len);
key = crypto.pbkdf2Sync(passPhrase, salt, 100000, 256/8, 'sha256');

decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

decipher.write(encrypted.slice(salt_len+iv_len));
decipher.end();

decrypted = decipher.read();
console.log(decrypted.toString());
return decrypted.toString();
};


module.exports = AES;