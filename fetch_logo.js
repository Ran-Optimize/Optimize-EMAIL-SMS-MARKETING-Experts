import fs from 'fs';
const txt = fs.readFileSync('klaviyo_out.txt', 'utf8');
const blocks = txt.split('=====');

console.log(blocks[1]);
