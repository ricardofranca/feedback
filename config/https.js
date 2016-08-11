var fs = require('fs');
var https = require('https');

module.exports = function( app ) {

  if( GLOBAL.Config.https ) {

    var privateKey = fs.readFileSync( Config.server.privateKey, 'utf8');
    var certificate = fs.readFileSync( Config.server.certificate, 'utf8');
    var ca = fs.readFileSync( Config.server.ca, 'utf8');

    var cas = [];
    var file = [];
    ca.split("\n").forEach(function(line, index){

      file.push(line);

      if( line.match("END CERTIFICATE") ) {
        cas.push( file.join("\n") );
        file = [];
      }

    });

    var credentials = {key: privateKey, cert: certificate, ca: cas};

    console.log('Will listen ', credentials);

    try {
      app.listen = function() {
        var httpsServer = https.createServer(credentials, app);
        return httpsServer.listen.apply(httpsServer, arguments);
      };

      var server = app.listen(Config.server.port, function() {
          console.log("Server configured for: " + (global.process.env.NODE_ENV || 'development') + " environment.");
          console.log(new Date)
      });

    } catch (e) {
      console.log("Error ", e);
    }


  }

};
