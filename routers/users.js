export default class Users {

  login(req, res) {
    var messages = "";
    var flashs = req.flash();
    if (flashs.error) {
        messages = flashs.error.join(" ");
    }
    res.render('login', {title: "Feedback", messages: messages});
  }

  logout(req, res) {
      req.logout();
      res.redirect('/');
  }

  register(req, res){
      var messages = "";
      var flashs = req.flash();
      if (flashs.error) {
          messages = flashs.error.join(" ");
      }
      res.render('register', {title: "Feedback", messages: messages})
  }

  create(req, res){

    const User = this.models.User;

    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function(user){

        if( !user ) {

            user = User.build({
                username: req.body.username,
                email: req.body.email
            });

            user.setPassword(req.body.password, function(){
                user.save().then(
                    function() {
                        res.redirect('/');
                    }
                );
            });
        }

    });

  }

  constructor(app, models) {
    this.app = app;
    this.models = models;

    app.get('/login', this.login.bind(this));
    app.post('/login',
        app.get("passport").authenticate('local',
          {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
          })
    );
    app.get('/logout', this.logout.bind(this) );
    app.get("/register", this.register.bind(this) );
    app.post("/register", this.create.bind(this) );

  }

}
