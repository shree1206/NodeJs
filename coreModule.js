//Core Module

//1. Global Module
console.log('It is a core module, so no need to import any where.');

//2. Non Global Module
//const fs = require('fs');
const fs = require('fs').writeFileSync;
//fs.writeFileSync("Hello.txt", "It is non global core module");
fs('test.txt', 'This is text');