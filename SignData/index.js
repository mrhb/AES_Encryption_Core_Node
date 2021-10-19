var forge = require('node-forge');
console.log('starting')
_private = '-----BEGIN RSA PRIVATE KEY-----\r\n'+
'MIIEogIBAAKCAQEAucCoytby1FrbJ0V9YAP43ZvSTTwtQjtJrIh2LA5JCEi3Yk4Y\r\n'+
'OWjEf7+snXZ93Gey6Z/xmZ18hQvzcJ+EurXMhhj8N4iBHyiS6ZTEBDm4MV5dpiyP\r\n'+
'iY08Bq2jmsBNYz5VJa5A9zzWs5CpSvuPAP6CVmHukfJUFTWU6MsxBuYSS6ah4vAr\r\n'+
'ty9vtkLVZEkld84c91Wt10Gwl90iWO7vkVU9f/Xw9u1olRLFGv+Zdwh4lqSvYTKw\r\n'+
'1imHKjLpF9k6AjiNbU6tjT86NlGf593zKHG9oGLpRd8OsXFlFVpt+KMQOFb8hjwp\r\n'+
'EvtUqC85maUy2TMPoxHMTVhbqB1zg8i2Zof7AwIDAQABAoIBAFH+ckO/aEdGp9CJ\r\n'+
'AxPcDQG9o7JGKvA+fYH0Zr2BvMk0WAbD1DubPInrkQWc5WfiOn6YBKy7cNjF8rq3\r\n'+
'H37Pey2CX+sfjWe0oE0NRw1acS0Rq6MLrnyYZHPKOBq6Yi65uBo+9hxstZVj+ObJ\r\n'+
'blGRBvWcmxO/dVA7a7Tq5IRYEKFldxkM/I3+g3sXiW9TxZry68HOU5FbAZQ+B1HN\r\n'+
'bjV+br+UAyX7n59Wu4t+c5/OsC1ccfWwc36USfDCdh7pOLzToWuiY8blqOeq48eO\r\n'+
'tAjWMVe8FFxuXensjtEOvnbDHwJbf5dC79wcBtlWFRSDvKjxdedwRSs6eAH5WE91\r\n'+
'aVOTXGkCgYEA4RWV+UsuUiCJwKLo475EmPx2/yKEgPPJv1UQlS2gaJlcMMHVKFka\r\n'+
'BTUsxrW03brGbgE/nhTEHuIrTqs0sPwC1JgTGYk/BQ9r8Wodrci0uEH8Yqlnc7FY\r\n'+
'9bZgQ4i7fNtemvcWCGEeQ6NqtNyIeIgIlDnx2O5r2Al+WnomfyR2aa8CgYEA00QX\r\n'+
'QYBNzs2ve9v1E0A+osKUOvpyxfhFXwjRSFr5r36x3hCX9Ty4gUvPqbySX2+J+ynl\r\n'+
'ByLYk2T9X+IfUlysMY+ZgmTsPJLVVUTj7aD9oLWLT7JzfxHOttdJY3UMt8zWhjlH\r\n'+
'rJVVpZFbN7NhMWL18gbjQdLnxxdbiAAI4L93HO0CgYBxqBm78Vepht6oVFrvLVOs\r\n'+
'QMfB22c3SmMUZ1rhSVHXn6EqyaXeIuf9uzUp/fUfhcHPKHg8VdYWljQyHEeWGxs+\r\n'+
'yK/UVDZrUrc6B1CHQXLoHAHavBoOFH6MTJRdZbzutkMWUzBf+NJ0ax9lxnpvCpny\r\n'+
'ZzQVS4dPZrPT8hxgVUQp5wKBgA6v0R4QmVgjHGvz4pmwAaq29C8Vch0pIUl2B3aM\r\n'+
'PIdiu2LArI+z5O+4IXufTF2uF12KkA1q8rtsbeDYi2ziXGYloXpbIcEkRAhlfaLr\r\n'+
'ajZd6I1lznmq9z/mv4dWf8fXSaKTINRynT2hWUIKCluwkYB90halXs+MZCSUPAnD\r\n'+
'xbgRAoGAdbDJI6+QjNSqpC01iA+kqOZsZnISc59pLGWRhL//DlYx0skGM7TYH5Gd\r\n'+
'f7GoXnYi4YlzrJtKaxrTOYysZVulpkebvnchx/sN/+BbRlOGCVpANaekuzTe85Im\r\n'+
'96kja+S3gdx1+R6kEz6sDXsC6Vdrx6h6jVTv0yuD1jT4SU+eUGs=\r\n'+
'-----END RSA PRIVATE KEY-----\r\n';

var privateKeyAssociatedWithCert  = forge.pki.privateKeyFromPem(_private);

var certPem='-----BEGIN CERTIFICATE-----\r\n' +
'MIICojCCAgsCFHRudgVch/R1vDCkektUhykjvtk9MA0GCSqGSIb3DQEBCwUAMIGP\r\n' +
'MQswCQYDVQQGEwJJUjERMA8GA1UECAwIS2hvcmFzYW4xEDAOBgNVBAcMB01hc2ho\r\n' +
'YWQxDzANBgNVBAoMBktvc2FycjEMMAoGA1UECwwDUiZEMRYwFAYDVQQDDA1NLlJl\r\n' +
'emEgSGFqamFyMSQwIgYJKoZIhvcNAQkBFhVtbW1oYWpqYXI4M0BnbWFpbC5jb20w\r\n' +
'HhcNMjExMDE3MTM0NzM5WhcNMjIxMDE3MTM0NzM5WjCBjzELMAkGA1UEBhMCSVIx\r\n' +
'ETAPBgNVBAgMCEtob3Jhc2FuMRAwDgYDVQQHDAdNYXNoaGFkMQ8wDQYDVQQKDAZL\r\n' +
'b3NhcnIxDDAKBgNVBAsMA1ImRDEWMBQGA1UEAwwNTS5SZXphIEhhamphcjEkMCIG\r\n' +
'CSqGSIb3DQEJARYVbW1taGFqamFyODNAZ21haWwuY29tMIGfMA0GCSqGSIb3DQEB\r\n' +
'AQUAA4GNADCBiQKBgQC7bJvb7i6lx8gKxfCBmisIAyO6OKePuUJhainLJYC8504Q\r\n' +
'pV9RnJ5Y4523eAmGO393yq4PC2iOTmC8pqVFHd9B2lFtYzWwOAd7VLoNO3eSXiEj\r\n' +
'O8w6E6KURgZSNJJyInjigh3FNizHdCiCPxXVUlyd+lbz7cenKsXRVTCTMPw1lwID\r\n' +
'AQABMA0GCSqGSIb3DQEBCwUAA4GBACsaxTwos7pTwMhJTcL46DhMJ4UHXUvaLeh3\r\n' +
'+pT9V9R7J/j8UPtMWl/dVhPatSU8yhOfkBIVPiaXT9zgdIaGU/CZIH9CQ/1Iu6Is\r\n' +
'TfPEtyQmXDTkoMFD52RlUmYxRPvWP9khpj6wiwCAXxyQgW+SnNbmJx7DaUIL/40G\r\n' +
'3PjeHQ1q\r\n' +
'-----END CERTIFICATE-----\r\n';

// add a recipient
var cert = forge.pki.certificateFromPem(certPem);

// create PKCS#7 signed data with authenticatedAttributes
// attributes include: PKCS#9 content-type, message-digest, and signing-time
var p7 = forge.pkcs7.createSignedData();
p7.content = forge.util.createBuffer('Some content to be signed.', 'utf8');
p7.addCertificate(cert);
p7.addSigner({
  key: privateKeyAssociatedWithCert,
  certificate: cert,
  digestAlgorithm: forge.pki.oids.sha256,
  authenticatedAttributes: [{
    type: forge.pki.oids.contentType,
    value: forge.pki.oids.data
  }, {
    type: forge.pki.oids.messageDigest
    // value will be auto-populated at signing time
  }, {
    type: forge.pki.oids.signingTime,
    // value can also be auto-populated at signing time
    value: new Date()
  }]
});
p7.sign();
var pem = forge.pkcs7.messageToPem(p7);

console.log(pem);

// PKCS#7 Sign in detached mode.
// Includes the signature and certificate without the signed data.
p7.sign({detached: true});
