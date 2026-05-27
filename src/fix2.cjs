const fs = require('fs');
let code = fs.readFileSync('src/inject.cjs', 'utf-8');
code = code.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync('src/inject.cjs', code);
console.log('Fixed syntax');
