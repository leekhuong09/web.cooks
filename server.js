const { setConfig } = require('next/config');
setConfig(require('./next.config'));
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 3000;
const hostname = 'localhost';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  server.use(handle);
  await server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
})();
