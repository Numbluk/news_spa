var User = Backbone.View.extend({
  template: app.templates.user,

  el: $("#user"),

  events: {
    "click .article h3": "viewArticle",
    "click #page_back": "prevPage",
    "click #page_next": "nextPage"
  },

  initialize: function() {
    this.page = 0;
    this.listenTo(this.collection, "reset update", this.rerenderCurrent);
  },

  render: function(articles) {
    if ( articles === undefined ) {
      articles = this.getArticlesOnPage(this.page);
    }

    if ( articles === undefined ) { return; }

    $("main").html(this.template({ articles: articles }));
    this.setElement($("#user"));
  },

  viewArticle: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".article").attr("data-id");
    this.trigger("view-article", this.collection.get(id).toJSON());
  },

  getPageNumber: function() {
    return $("#user").find("ul").attr("data-page");
  },

  changePageNumber: function(num) {
    var new_page = +this.getPageNumber() + num;
    $("#user").find("ul").attr("data-page", new_page);
    return new_page;
  },

  nextPage: function(e) {
    e.preventDefault();
    var next_page = this.page + 1;
    var ten = this.getArticlesOnPage(next_page);
    if ( ten.length === 0 ) { return; }

    this.page++;
    this.render(ten);
  },

  prevPage: function(e) {
    e.preventDefault();
    var prev_page = this.page - 1;
    var ten = this.getArticlesOnPage(prev_page);
    if ( ten.length === 0 ) { return; }

    this.page--;
    this.render(ten);
  },

  getArticlesOnPage: function(page) {
    var sortedJSON = this.getSortedAndPublished();
    var ten = [];

    var baseline = page * 10;

    for ( var i = baseline; i < baseline + 10; i++) {
      if ( !sortedJSON[i] ) { break; }
      ten.push(sortedJSON[i]);
    }

    return ten;
  },

  rerenderCurrent: function() {
    if ( this.$el.is(":visible") ) {
      var ten = this.getArticlesOnPage(this.page);
      this.render(ten);
    }
  },

  getSortedAndPublished: function() {
    var sorted = this.collection.sortBy(function(article) {
      return -article.get('post_date');
    });

    var published = [];
    sorted.forEach(function(article) {
      if ( article.get('published') ) { published.push(article.toJSON()); }
    });

    return published;
  }
});
