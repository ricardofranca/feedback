import express from 'express';
import avro from 'avsc';

const app = express();

const location = {
  address: "Rua Eurico Medina, 185",
  createdAt: new Date,
  lat: -3.7553119,
  lng: -38.5864542
};

app.get('/schemas', function(){
  const type = avro.infer(location);
  res.send(type);
});

app.get('/avro2', function (req, res) {
  const location = {
    address: "Rua Eurico Medina, 185"
  }
  res.send(location);
});

app.get('/avro', function (req, res) {
  var type = avro.parse({
      name: 'Location',
      type: 'record',
      fields: [
        {name: 'address', type: 'string'}
      ]
  })
  const buf = type.toBuffer(location);
  res.set('Content-Type', 'application/octet-binary');
  var decoded = type.fromBuffer(buf);
  console.log("Buffer ********* ", buf);
  console.log("Decoded ********* ", decoded);
  res.send(buf);
});

app.listen(process.env.PORT || 9090);
