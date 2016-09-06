export default class Settings {

  settings(req, res) {
    const user = req.user;
    const { User } = this.models;
    User.findById(user.id, {
      attributes: ['id', 'name', 'imageUrl', 'email', 'notifications'],
    }).then(u => res.send(u.toJSON()));
  }

  save(req, res) {
    const user = req.user;
    const { User } = this.models;
    User.findById(user.id, {
      attributes: ['id', 'name', 'imageUrl', 'email', 'notifications'],
    }).then(founded => {
      founded.update(req.body).then(saved => res.send(saved.toJSON()));
    });
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;
    app.get('/settings.json', this.settings.bind(this));
    app.put('/settings/:id.json', this.save.bind(this));
  }

}

module.exports = Settings;
