export default class Invites {

  invites = [{
    id: 23,
    name: 'Chico',
    url: 'https://pbs.twimg.com/profile_images/85884918/barroso_200x200.JPG'
  },{
    id: 30,
    name: 'renoir'
  }];

  getInvites(req, res) {
    res.send(this.invites);
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;

    app.get('/invites.json', this.getInvites.bind(this));

  }

}
