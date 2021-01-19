const cookieParser = require('cookie-parser');
const express = require('express');

const publicAdsense = express();

const port = 8080;

publicAdsense.use(cookieParser(), express.static('public-adsense'));

publicAdsense.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

const siteA = express();
siteA.use(express.static('public-a'));
siteA.listen(8081, () => {
  console.log('おいらは8081で待機してるよ');
});
siteA.get('/test', (req, res) => {
  res.setHeader('content-type', 'audio/aac');
  res.send('test');
});

const siteB = express();
siteB.use(express.static('public-b'));
siteB.listen(8082, () => {
  console.log('おいらは8082で待機してるよ');
});
