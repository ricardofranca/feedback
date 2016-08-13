import fs from 'fs';
import path from 'path';
import express from 'express';
import models from './models';

import globalsConfig from './config/globals';
import httpsConfig from './config/https';
import expressConfig from './config/express';
import passportConfig from './config/passport';

import Users from './routers/users';
import Invites from './routers/invites';
import Feedbacks from './routers/feedbacks';

const app = express();

expressConfig(express, app);
passportConfig(express, app, models);

new Users(app, models);
new Invites(app, models);
new Feedbacks(app, models);

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
