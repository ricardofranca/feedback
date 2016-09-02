import path from 'path';
import fs from 'fs';

export default class Routers {
  constructor(app, models) {
    this.app = app;
    this.models = models;
  }

  requireFromFile = file => {
    if (file.match(/\.js$/) !== null && file !== 'index.js') {
      const name = file.replace('.js', '');
      const ConstructorClass = require(path.resolve(path.join('routers', name)));
      new ConstructorClass(this.app, this.models);
    }
  }

  init() {
    const filePath = path.resolve(path.join('routers'));
    fs.readdirSync(filePath).forEach(this.requireFromFile);
  }

}
