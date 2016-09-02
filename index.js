import fs from 'fs';
import path from 'path';
import express from 'express';

import globalsConfig from './config/globals';
import httpsConfig from './config/https';
import expressConfig from './config/express';
import passportConfig from './config/passport';

import Routers from './routers';
import models from './models';

const app = express();

expressConfig(express, app);
passportConfig(express, app, models);

const routers = new Routers(app, models);
routers.init();

const manifest = path.resolve(path.join('public', 'assets', 'offline.appcache'));
app.get('/offline.appcache', (req, res) => {
  res.setHeader('Content-type', 'text/cache-manifest');
  res.send(fs.readFileSync(manifest));
});

app.get('/*', (req, res) => {
  const user = req.user;
  const flashs = req.flash();
  const messages = (flashs.error) ? flashs.error.join(' ') : '';
  res.render('index', {
    title: 'Feedback',
    user,
    messages,
  });
});

httpsConfig(app);
/* HTTPS */
if (!globalsConfig.https) {
  app.listen(process.env.PORT || 9090);
  console.log('Listen at', process.env.PORT || 9090);
}
