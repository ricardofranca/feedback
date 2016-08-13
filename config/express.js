import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import reactViews from 'express-react-views';
import expressSession from 'express-session';
import connectFlash from 'connect-flash';
import favicon from 'serve-favicon';

export default (express, app) => {
  const icoUrl = path.resolve(path.join('public', 'assets', 'images', 'smile.ico'));
  app.use(express.static(path.resolve(path.join('public'))));
  app.set('views', path.resolve(path.join('views')));
  app.set('view engine', 'jsx');
  app.engine('jsx', reactViews.createEngine());
  app.use(logger('combined'));
  app.use(cookieParser());
  app.use(favicon(icoUrl));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
  app.use(connectFlash());
};
