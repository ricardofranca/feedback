import fs from 'fs';
import https from 'https';

export default (app) => {
  if (GLOBAL.Config.https) {
    const privateKey = fs.readFileSync(Config.server.privateKey, 'utf8');
    const certificate = fs.readFileSync(Config.server.certificate, 'utf8');
    const ca = fs.readFileSync(Config.server.ca, 'utf8');

    const cas = [];
    const file = [];
    ca.split('\n').forEach(line => {
      file.push(line);
      if (line.match('END CERTIFICATE')) {
        cas.push(file.join('\n'));
      }
    });

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: cas,
    };

    console.log('Will listen ', credentials);
    const log = () =>
      `Server configured for: ${global.process.env.NODE_ENV || 'development'} environment.`;

    try {
      app.listen = () => {
        const httpsServer = https.createServer(credentials, app);
        return httpsServer.listen.apply(httpsServer, arguments);
      };

      app.listen(Config.server.port, () => {
        console.log(log());
        console.log(new Date());
      });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }
};
