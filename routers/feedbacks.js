export default class Feedbacks {

  feedbacks = [
    {
      id: 30,
      start: new Date,
      finish: new Date,
      description: 'convido você para me dar um Feedback sobre que gostaria que eu melhorasse como pessoa e no que você gosta de mim e gostaria que nunca perdesse.',
      user: {
        id: 1,
        url: "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11098716_801734869909168_1095953541_a.jpg",
        name: "Christiano Milfont"
      },
      invited: [
        {
          id: 167,
          name: "Francisco Barroso",
          url: 'https://pbs.twimg.com/profile_images/85884918/barroso_200x200.JPG',
          feedbacks: 6
        },
        {
          id: 200,
          name: "Lucas Teixeira",
          url: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/s150x150/12940679_947840045330987_82550338_a.jpg',
          feedbacks: 3
        },
        {
          id: 224,
          name: "Rafael Ponte",
          url: 'https://pbs.twimg.com/profile_images/504685130191867904/OFE6pmSN_400x400.jpeg',
          feedbacks: 0
        }
      ]
    }
  ];

  getFeedbacks(req, res, next) {
    const user = req.user;
    const { Feedback, User } = this.models;
    Feedback.findAll({
      include: {
        model: User,
        attributes: ['id', 'name', 'imageUrl'],
      },
      where: [{ UserId:  user.id}],
    }).then(list => {
      return res.send(
        list.map(feedback => feedback.toJSON())
      );
    });
  }

  getFeedback(req, res) {
    const { params } = req;
    const { Feedback, User } = this.models;
    Feedback.findById(params.id, {
      include: {
        model: User,
        attributes: ['id', 'name', 'imageUrl'],
      },
    }).then(feedback => res.send(feedback.toJSON()));
  }

  create(req, res) {
    const { user } = req;
    this.models.Feedback.create({
      UserId: user.id,
      start: new Date(),
      finish: new Date(),
      description: `${user.name} o convida para uma rodada de Feedback`,
    }).then(newFeedback => {
      newFeedback.reload({
        include: {
          model: this.models.User,
          attributes: ['id', 'name', 'imageUrl'],
        },
      }).then(feedback => res.send(feedback.toJSON()));
    });
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;

    app.get('/feedbacks/:id.json', this.getFeedback.bind(this));
    app.get('/feedbacks.json', this.getFeedbacks.bind(this));
    app.post('/feedbacks.json', this.create.bind(this));
  }

}

module.exports = Feedbacks;
