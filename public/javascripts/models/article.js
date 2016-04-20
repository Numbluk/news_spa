var Article = Backbone.Model.extend({
  defaults: {
    headline: "",
    teaser: "",
    body: "",
    post_date: "", //  (new Date()).toUTCString((new Date()).getUTCSeconds())
    published: false
  }
});
