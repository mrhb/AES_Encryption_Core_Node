// var CryptoJS = require('crypto-js')

// CryptoJS.enc.Utf8.parse('hello world')
// // { words: [ 1751477356, 1864398703, 1919706112 ], sigBytes: 11 }

// CryptoJS.enc.Utf8.parse('hello world').toString()
// // '68656c6c6f20776f726c64'

// CryptoJS.enc.Utf8.parse('hello world').toString(CryptoJS.enc.Base64)
// // 'aGVsbG8gd29ybGQ='

// CryptoJS.enc.Base64.parse('aGVsbG8gd29ybGQ=').toString(CryptoJS.enc.Utf8)
// // 'hello world'

// CryptoJS.enc.Hex.parse('68656c6c6f20776f726c64').toString(CryptoJS.enc.Utf8)
// // 'hello world'


const crypto = require('crypto');

salt = crypto.randomBytes(16);
iv = crypto.randomBytes(16);
key = crypto.pbkdf2Sync('my password', salt, 100000, 256/8, 'sha256');

cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

cipher.write("That is our super secret text");
cipher.end()

encrypted = cipher.read();
console.log({
  iv: iv.toString('base64'),
  salt: salt.toString('base64'),
  encrypted: encrypted.toString('base64'),
  concatenned: Buffer.concat([salt, iv, encrypted]).toString('base64')
});

/*

{ iv: 'JaTFWNAEiWIPOANqW/j9kg==',
  salt: '4DkmerTT+FXzsr55zydobA==',
  encrypted: 'jE+QWbdsqYWYXRIKaUuS1q9FaGMPNJko9wOkL9pIYac=',
  concatenned:
   '4DkmerTT+FXzsr55zydobCWkxVjQBIliDzgDalv4/ZKMT5BZt2yphZhdEgppS5LWr0VoYw80mSj3A6Qv2khhpw==' }

*/