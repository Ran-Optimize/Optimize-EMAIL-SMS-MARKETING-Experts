import fs from 'fs';
import path from 'path';

fs.mkdirSync('public', { recursive: true });
fs.mkdirSync('public/assets', { recursive: true });

const files = ['21-percent.png', '22-percent.png', '23-percent.png', '51.png', '56.png', '64k.png', '71k.png'];
files.forEach(file => {
  fs.copyFileSync(`assets/${file}`, `public/assets/${file}`);
});
