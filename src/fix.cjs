const fs = require('fs');
let code = fs.readFileSync('src/replace.cjs', 'utf-8');
code = code.replace(/\\`/g, '`');
fs.writeFileSync('src/replace.cjs', code);
console.log('Fixed syntax');
