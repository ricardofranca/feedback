module.exports = () => {
  GLOBAL.Config = {
    https: process.env.HTTPS,
    url: process.env.URL || 'http://localhost:9090',
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    server: {
      port: 9999,
      privateKey: '/Users/cmilfont/host.nopass.key',
      certificate: '/Users/cmilfont/server.crt',
      ca: '/Users/cmilfont/milfont.ca-bundle',
    },
  };
};
