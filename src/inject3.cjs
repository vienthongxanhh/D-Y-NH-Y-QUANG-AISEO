const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const regex = /(<section id="products" className="py-12 md:py-24 relative">)[\s\S]*?(?=\{\/\* Certifications & Awards Backdrop \*\/})/m;

const replacementText = fs.readFileSync('src/replacement.txt', 'utf-8');

code = code.replace(regex, replacementText + "\\n\\n      ");
fs.writeFileSync('src/App.tsx', code);
console.log('Successfully injected text from txt file.');
