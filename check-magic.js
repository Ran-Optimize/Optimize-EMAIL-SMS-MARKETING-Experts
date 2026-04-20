import fs from 'fs';
['21-percent.png', '22-percent.png', '23-percent.png', '51.png', '56.png', '64k.png', '71k.png'].forEach(file => {
  const buffer = Buffer.alloc(8);
  const fd = fs.openSync(`assets/${file}`, 'r');
  fs.readSync(fd, buffer, 0, 8, 0);
  console.log(`${file}: ${buffer.toString('hex')}`);
});
