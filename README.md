# Simple Encrypt JS

## What is this?

Simple package containing several functions for encrypting and decrypting strings.

## How to install?

Just run the following code: `npm install --save simple-encrypt-js`

## How to use?

This package contains 1 class with several functions. 
```
import Encryption from 'simple-encrypt-js';
const encrypt = new Encryption()
``` 

Then, you can use several methods:
```
//Hash string
encrypt.hashString

//Derive password
encrypt.derivePassword

// Encrypt string
encrypt.encryptString
```


