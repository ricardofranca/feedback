export default class Invites {

  invites = [

    {
      id: 18,
      description: 'Christiano Martins Milfont de Almeida o convida para dar um Feedback sobre o que voce admiria que ele pretende conservar e melhorar o que pode te incomodar',
      url: 'https://pbs.twimg.com/profile_images/85884918/barroso_200x200.JPG',
      period: '16 de jul a 20 de jul',
      positive1: 'Acredito que tem um humor sempre contagiante',
      positive2: 'Uma pessoa que leva a vida na seriedade',
      positive3: 'Controla os gastos como ninguém',
      negative1: 'Precisa melhorar essa passagem de guarda',
      negative2: 'Faz os 100 kg do tecão',
      negative3: 'Meia guarda do Zuruca'
    }

    ];

  getInvites(req, res) {
    res.send(this.invites);
  }

  getInvite(req, res) {
    let invite = this.invites.reduce(function(a, b){
      if(b.id == req.params.id) return b;
      return a;
    }, {});

    res.send([invite]);
  }

  save(req, res) {
    let invite = this.invites.reduce(function(a, b){
      if(b.id == req.params.id) return b;
      return a;
    }, {});

    console.log("*****", req.params, req.query, req.body);

    Object.keys(req.body).forEach(function(key){
      let value = req.body[key];
      invite[key] = value;
    })

    res.send(invite);
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;

    app.get('/invites/:id.json', this.getInvite.bind(this));
    app.get('/invites.json', this.getInvites.bind(this));
    app.put('/invites/:id.json', this.save.bind(this))
  }

}

module.exports = Invites;
