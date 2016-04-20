var Articles = Backbone.Firebase.Collection.extend({
  model: Article,
  url: "https://radiant-heat-4774.firebaseio.com/"
});
