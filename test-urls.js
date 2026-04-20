import https from 'https';
const urls = [
  'https://www.vectorlogo.zone/logos/klaviyo/klaviyo-ar21.svg',
  'https://cdn.worldvectorlogo.com/logos/klaviyo.svg',
  'https://cdn.worldvectorlogo.com/logos/klaviyo-1.svg',
  'https://logos-world.net/wp-content/uploads/2023/07/Klaviyo-Logo.png'
];

urls.forEach(url => {
  https.get(url, res => {
    console.log(url, res.statusCode);
  }).on('error', err => console.log(url, err.message));
});
