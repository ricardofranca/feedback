import fs from 'fs';

function updateVersion() {

  let file = __dirname + '/../../public/assets/offline.appcache';
  let pattern = /\$\{([^}]+)\}/g;

  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    let content = data.replace(pattern, function(){
          return `\$\{${new Date().getTime()}\}`;
    });

    fs.writeFile(file, content, 'utf8', function (err) {
       if (err) return console.log(err);
    });

  });
}

export default updateVersion;

updateVersion();

