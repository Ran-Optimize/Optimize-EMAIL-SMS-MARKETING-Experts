import fs from 'fs';

const files = {
    img21: '21-percent.png',
    img22: '22-percent.png',
    img23: '23-percent.png',
    img51: '51.png',
    img56: '56.png',
    img64k: '64k.png',
    img71k: '71k.png'
};

let code = '';
for (const [varName, fileName] of Object.entries(files)) {
    const data = fs.readFileSync(`assets/${fileName}`);
    const base64 = data.toString('base64');
    code += `export const ${varName} = "data:image/png;base64,${base64}";\n`;
}

fs.writeFileSync('image-data.ts', code);
console.log('Base64 images generated successfully.');

