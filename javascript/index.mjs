import CryptoES from 'crypto-es';
import { Encrypt,Decrypt } from "./AES_crypto_es.mjs";

//import AES from './AES_crypto_es.ts';


//**************Encryption************** */

const passPhrase="salamMRezaHajjar";
const plainText="Plain text input to Nodejs ";
console.log(Encrypt(plainText,passPhrase));

//**************Decryption************** */
console.log(Decrypt(Encrypt(plainText,passPhrase),passPhrase));
