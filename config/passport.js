const passport = require('passport');
const crypto = require('crypto');
const Strategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

export default (express, app, models) => {

  passport.use(new GoogleStrategy({
    clientID: GLOBAL.Config.clientID,
    clientSecret: GLOBAL.Config.clientSecret,
    callbackURL: `${GLOBAL.Config.url}/auth/google/callback`,
  },
  (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;
    const defaults = {
      email,
      username: profile.id,
      googleId: profile.id,
      imageUrl: profile.photos[0].value,
      name: profile.displayName,
      hash: accessToken,
    };
    models.User.findOrCreate({
      where: { email },
      defaults,
    }).then(users => {
      const user = users[0];
      user.save(defaults).then(saved => done(null, saved))
    });
  }));

  passport.use(new Strategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      models.User.findOne({
        where: {
          username,
        },
      }).then((user) => {
        if (!user) {
          return done(null, false, { message: 'userDontExist' });
        }
        // https://adambard.com/blog/3-wrong-ways-to-store-a-password/
        // https://gist.github.com/skeggse/52672ddee97c8efec269
        crypto.pbkdf2(password, user.get('salt'), 12000, 512, (err, hashRaw) => {
          if (err) {
            return done(null, false, { message: err.message });
          }
          const hash = new Buffer(hashRaw, 'binary').toString('hex');
          return (hash === user.get('hash')) ?
            done(null, user) :
            done(null, false, { message: 'incorrectPasswordError' });
        });
      }).catch((error) => done(null, false, { message: error.message }));
    }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    models.User.findById(id)
               .then(user => {
                 done(null, user);
               })
               .catch(({ message }) => done(null, false, { message }));
  });

  app.use(passport.initialize());
  app.use(passport.session());
  app.set('passport', passport);
};
