import express from 'express';
import * as models from "./models";

const app = express();
require('./config/express.js')(express, app, __dirname);
app.get('/*', function (req, res) {
    res.render('index', {user: req.user});
});
app.listen(process.env.PORT || 9090);

console.log("Listen at", process.env.PORT || 9090);
