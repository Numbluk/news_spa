var ArticleView = Backbone.View.extend({
  templates: {
    new_or_edit: app.templates.edit,
    view: app.templates.view_article
  },

  events: {
    "click #save_as_draft, #save_and_publish": "saveData",
    "click #view_article #back": "backToUser",
    "click #refresh": "rerenderCurrent"
  },

  initialize: function() {
    this.listenTo(this.collection, "change update reset", this.checkChanges);
  },

  checkChanges: function() {
    if ( $("#view_article").is(":visible") ) {
      var article_id = $("#view_article").attr("data-id");

      var article_on_page = this.collection.get(article_id);

      // if article has been removed
      if ( article_on_page === undefined ) {
        $("#removed").toggle();
        return;
      }

      // if article has been changed
      if ( !_.isEqual(this.current_article, article_on_page.toJSON()) ) {
        $("#refresh").toggle();
      }
    }
  },

  rerenderCurrent: function(e) {
    e.preventDefault();
    $("#refresh").toggle();
    var article_on_page = this.collection.get($("#view_article").attr("data-id")).toJSON();

    this.viewArticle(article_on_page);
  },

  render: function(html_data) {
    $("main").html(html_data);
    // this.setElement($("#add_or_edit"));
  },

  newArticle: function(article) {
    this.render(this.templates.new_or_edit({}));
    this.setElement($("#add_or_edit"));
  },

  editArticle: function(article) {
    this.render(this.templates.new_or_edit({ article: article }));
    this.setElement($("#add_or_edit"));
  },

  backToUser: function(e) {
    e.preventDefault();
    $("#show_user").trigger("click");
    this.setElement($("#user"));
  },

  viewArticle: function(article) {
    if ( $("#removed").is(":visible") ) {
      $("#removed").toggle();
    }
    this.current_article = article;
    this.render(this.templates.view({ article: article }));
    this.setElement($("#view_article"));
  },

  saveData: function(e) {
    e.preventDefault();
    console.log('');

    var new_article = {};

    // Check for id
    if ( $("form").attr("data-id") ) {
      new_article.id = $("form").attr("data-id");
    }

    // Check method submit type
    if( $(e.target).attr("id") === "save_as_draft" ) {
      new_article.post_date = '';
      new_article.published = false;
    } else if ( $(e.target).attr("id") === "save_and_publish" ) {
      new_article.post_date = Date.now();
      new_article.published = true;
    }


    var data = $("form").serializeArray();
    for ( var i = 0; i < data.length; i++ ) {
      new_article[data[i].name] = data[i].value;
    }

    if ( new_article.id ) {
      this.collection.get(new_article.id).set(new_article);
    } else {
      console.log('dne');
      this.collection.add(new_article);
    }

    $("#show_admin").trigger("click");
  }
});
