const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const reactViews = require('express-react-views');
const expressSession = require('express-session');
const connectFlash = require('connect-flash');

module.exports = (express, app, path) => {
  app.use(express.static(`${path}/public`));
  app.set('views', `${path}/views`);
  app.set('view engine', 'jsx');
  app.engine('jsx', reactViews.createEngine());
  app.use(morgan('combined'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
  app.use(connectFlash());
};
