const passport = require('passport');

export default class Users {

  logout(req, res) {
    req.logout();
    res.redirect('/');
  }

  redirectErrors(res) {
    return (error) => res.render('index', { messages: error.errors });
  }

  create(req, res, next) {
    const User = this.models.User;

    User.findOne({
      where: {
        username: req.body.username,
        email: req.body.email,
      },
    }).then(user => {
      if (!user) {
        const newUser = User.build({
          username: req.body.username,
          email: req.body.email,
        });

        newUser.validate().then(error => {
          if (error) {
            this.redirectErrors(res)(error);
          } else {
            newUser.setPassword(req.body.password, () => {
              newUser.save()
                     .then(() => {
                       req.login(newUser, err => {
                         if (err) { return next(err); }
                         return res.redirect('/');
                       });
                     })
                     .catch(this.redirectErrors(res));
            });
          }
        });
      } else {
        this.redirectErrors(res)({
          errors: [
            {
              message: 'username_already_registerd',
              type: 'Validation error',
              path: 'username',
            },
            {
              message: 'email_already_registerd_with_email',
              type: 'Validation error',
              path: 'email',
            },
          ],
        });
      }
    }).catch(this.redirectErrors(res));
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;
    app.get('/logout', this.logout.bind(this));
    app.post('/login',
      app.get('passport').authenticate('local',
        {
          successRedirect: '/',
          failureRedirect: '/',
          failureFlash: true,
        })
    );
    app.post('/register', this.create.bind(this));

    app.get('/auth/google',
      passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true,
      })
    );
  }

}
