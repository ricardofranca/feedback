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

  getInvite(req, res) {
    let invite = this.invites.reduce(function(a,b) {
      if(b.id == req.params.id) return b;
      return a;
    }, {});
    res.send(invite);
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;

    app.get('/invites/:id.json', this.getInvite.bind(this));
    app.get('/invites.json', this.getInvites.bind(this));

  }

}
