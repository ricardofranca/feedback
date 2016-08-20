import Mailer from '../services/mailer';
const passport = require('passport');

export default class Users {

  logout(req, res) {
    req.logout();
    res.redirect('/');
  }

  redirectErrors(res, page = 'index') {
    return (error) => res.render(page, { messages: error.errors });
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

  reset(req, res) {
    const User = this.models.User;
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then(user => {
      if (!user) {
        const error = {
          errors: [],
        };
        this.redirectErrors(res, 'reset')(error);
      } else {
        user.generateHash(user => {
          const mailer = new Mailer();
          const url = `${GLOBAL.Config.url}/token/${user.hash}`;
          const template = `<a href="${url}">CLique pra trocar a senha</a>`;
          mailer.send({
            from: 'feedback@produtoreativo.com.br',
            to: user.email,
            subject: 'Feedback from Produto Reativo: Reset Password',
            content: 'Email de teste',
          }).then((response) => {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
          }).catch((error) => {
            console.log('Error', error);
          });
          // redireciona pra tela email sended
        });
      }
    }).catch(this.redirectErrors(res, 'reset'));
  }

  validateToken(req, res, next) {
    next();
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

    app.get('/reset/password', (req, res) => res.render('reset'));
    app.post('/reset/password', this.reset.bind(this));

    app.get('/token/:token',
      this.validateToken.bind(this),
      (req, res) => res.render('password'));

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
