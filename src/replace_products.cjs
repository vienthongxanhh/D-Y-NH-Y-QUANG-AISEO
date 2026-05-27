const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');
const productsText = fs.readFileSync('src/products.txt', 'utf-8');

const regex = /const products = \[[\s\S]*?\];/m;

// Extract between <products> and </products>
const rawProducts = productsText.match(/<products>\s*([\s\S]*?)\s*<\/products>/)[1];

code = code.replace(regex, `const products = ${rawProducts};`);

fs.writeFileSync('src/App.tsx', code);
console.log("Products replaced successfully");
