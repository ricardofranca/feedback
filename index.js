import fs from 'fs';
import express from 'express';
import * as models from './models';
import Users from './routers/users';
import Invites from './routers/invites';
import Feedbacks from './routers/feedbacks';

require(__dirname + '/config/globals.js')();
const app = express();
require('./config/express.js')(express, app, __dirname);
require('./config/passport.js')(express, app, __dirname, models);

new Users(app, models);
new Invites(app, models);
new Feedbacks(app, models);

app.get('/offline.appcache', function (req, res) {
  res.setHeader('Content-type', 'text/cache-manifest');
  res.send(fs.readFileSync(__dirname + '/public/assets/offline.appcache'));
});

app.get('/*', function (req, res) {
  const user = req.user;
  const flashs = req.flash();
  const messages = (flashs.error) ? flashs.error.join(' ') : '';

  res.render('index', {
    title: 'Feedback',
    user,
    messages,
  });
});

require(__dirname + '/config/https.js')(app);
/* HTTPS */
if (!GLOBAL.Config.https) {
  app.listen(process.env.PORT || 9090);
  console.log('Listen at', process.env.PORT || 9090);
}
