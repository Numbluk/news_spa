var Admin = Backbone.View.extend({
  template: app.templates.admin,

  events: {
    "click #new_article": "newArticle",
    "click ul .edit_article": "editArticle",
    "click ul .delete_article": "deleteArticle"
  },

  render: function() {
    $("main").html(this.template({ articles: this.collection.toJSON() }));
    this.setElement($("#admin"));
  },

  newArticle: function(e) {
    e.preventDefault();
    this.trigger("new-article");
  },

  editArticle: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".article").attr("data-id");
    this.trigger("edit-article", this.collection.get(id).toJSON() );
  },

  deleteArticle: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".article").attr("data-id");
    this.collection.remove({ id: id });
    this.render();
  }
});
