var app = {
  templates: JST,

  init: function() {
    this.bind();

    var app = this;
    _.extend(app, Backbone.Events);
    app.firebaseRef = new Firebase("https://radiant-heat-4774.firebaseio.com/");
    app.collection = new Articles();
    app.collection.fetch();

    app.admin = new Admin({ collection: app.collection });
    app.article_view = new ArticleView({ collection: app.collection });

    this.listenTo(this.admin, "new-article", app.article_view.newArticle.bind(this.article_view));
    this.listenTo(this.admin, "edit-article", app.article_view.editArticle.bind(this.article_view));

    app.user = new User({ collection: app.collection });
    this.listenTo(this.user, "view-article", this.article_view.viewArticle.bind(this.article_view));
  },

  bind: function() {
    $("#show_admin").on("click", function(e) {
      e.preventDefault();
      app.admin.render();
    });

    $("#show_user").on("click", function(e) {
      e.preventDefault();
      app.user.render();
    });
  }
};

Handlebars.registerHelper('secondsToDate', function(seconds) {
  return new Date(seconds);
});
