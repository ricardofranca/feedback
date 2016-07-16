import express from 'express';
import * as models from "./models";
import Users from './routers/users';
import Invites from './routers/invites';

const app = express();
require('./config/express.js')(express, app, __dirname);
require('./config/passport.js')(express, app, __dirname, models);

new Users(app, models);
new Invites(app, models);

app.get('/*', function (req, res) {
    res.render('index', {user: req.user});
});
app.listen(process.env.PORT || 9090);

console.log("Listen at", process.env.PORT || 9090);
