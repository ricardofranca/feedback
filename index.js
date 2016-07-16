import express from 'express';
import * as models from "./models";
import Users from './routers/users';

const app = express();
require('./config/express.js')(express, app, __dirname);
require('./config/passport.js')(express, app, __dirname, models);

new Users(app, models);

/*  TODO */
import avro from 'avsc';
const location = {
  address: "Rua Eurico Medina, 185",
  createdAt: new Date,
  lat: -3.7553119,
  lng: -38.5864542
};

app.get('/schemas', function(req, res){
  const type = avro.infer(location);
  res.send(type);
});

app.get('/avro2', function(req, res) {
  res.send(location);
});

app.get('/avro', function (req, res) {
  // var type = avro.parse({
  //     name: 'Location',
  //     type: 'record',
  //     fields: [
  //       {name: 'address', type: 'string'}
  //     ]
  // })
  const type = avro.infer(location);
  const buf = type.toBuffer(location);
  res.set('Content-Type', 'application/octet-binary');
  var decoded = type.fromBuffer(buf);
  console.log("Buffer ********* ", buf);
  console.log("Decoded ********* ", decoded);
  res.send(buf);
});
/*  TODO */

app.get('/*', function (req, res) {
    res.render('index', {user: req.user});
});

app.listen(process.env.PORT || 9090);

console.log("Listen at", process.env.PORT || 9090);
