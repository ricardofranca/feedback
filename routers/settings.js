export default class Settings {

  settings(req, res) {
    const user = req.user;
    const { User } = this.models;
    User.findById(user.id, {
      attributes: ['id', 'name', 'imageUrl', 'email'],
    }).then(u => res.send(u.toJSON()));
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;
    app.get('/settings.json', this.settings.bind(this));
  }

}

module.exports = Settings;
