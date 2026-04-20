import fs from 'fs';
['21-percent.png', '22-percent.png', '23-percent.png', '51.png', '56.png', '64k.png', '71k.png'].forEach(file => {
  const stats = fs.statSync(`assets/${file}`);
  console.log(`${file}: ${stats.size} bytes`);
});
