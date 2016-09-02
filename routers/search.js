export default class Search {

  search(req, res, next) {
    res.send(['Adalto', 'Antenor', 'Chico', 'Milfont']);
  }

  constructor(app, models) {
    this.app = app;
    this.models = models;
    app.get('/search', this.search.bind(this));
  }

}

module.exports = Search;
