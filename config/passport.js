'use strict';
var passport = require('passport'),
    crypto = require('crypto'),
    bodyParser = require('body-parser'),
    Strategy = require('passport-local').Strategy;

module.exports = function (express, app, path, models) {

    passport.use(new Strategy(
        function (username, password, done) {

            models.User.findOne({
                where: {username: username}
            }).then(function (user) {

                if (!user) {
                    return done(null, false, {message: "userDontExist"});
                }

                // https://adambard.com/blog/3-wrong-ways-to-store-a-password/
                // https://gist.github.com/skeggse/52672ddee97c8efec269
                crypto.pbkdf2(password, user.get("salt"), 12000, 512, function (err, hashRaw) {

                    if (err) {
                        return done(null, false, {message: err.message});
                    }

                    var hash = new Buffer(hashRaw, 'binary').toString('hex');

                    if (hash === user.get("hash")) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "incorrectPasswordError"});
                    }
                });

            }).catch(function (error) {
                return done(null, false, {message: error.message});
            });

        }));

    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        models.User.findById(id).then(function (user) {
            done(null, user);
        }).catch(function (error) {
            return done(null, false, {message: error.message});
        });
    });

    app.use(require('morgan')('combined'));
    app.use(require('cookie-parser')());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('express-session')({secret: 'keyboard cat', resave: false, saveUninitialized: false}));
    app.use(require('connect-flash')());

    app.use(passport.initialize());
    app.use(passport.session());

    app.set("passport", passport);
};
