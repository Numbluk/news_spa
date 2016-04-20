this["JST"] = this["JST"] || {};

this["JST"]["admin"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li><div class=\"article\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\"><h3>"
    + alias2(alias1((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h3>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.post_date : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "<p>"
    + alias2(alias1((depth0 != null ? depth0.teaser : depth0), depth0))
    + "</p><a class=\"edit_article\" href=\"#\">Edit</a><a class=\"delete_article\" href=\"#\">Delete</a></div></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<small>"
    + container.escapeExpression((helpers.secondsToDate || (depth0 && depth0.secondsToDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.post_date : depth0),{"name":"secondsToDate","hash":{},"data":data}))
    + "</small>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<small>Draft</small>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"admin\"><h2>Administer</h2><a href=\"#\" id=\"new_article\">Add Article</a><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.articles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div>";
},"useData":true});

this["JST"]["edit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Edit Article</h2><form action=\"#\" method=\"\" data-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "<h2>New Article</h2><form action=\"#\" method=\"\">";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.article : depth0),{"name":"with","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<label for=\"headline\">Headline</label><input type=\"text\" id=\"headline\" name=\"headline\" value="
    + ((stack1 = ((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "><label for=\"teaser\">Teaser</label><input type=\"text\" id=\"teaser\" name=\"teaser\" value=\""
    + alias4(((helper = (helper = helpers.teaser || (depth0 != null ? depth0.teaser : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"teaser","hash":{},"data":data}) : helper)))
    + "\"><label for=\"body\">body</label><textarea id=\"body\" name=\"body\" value=\""
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</textarea><div id=\"published\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.published : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><button type=\"submit\" id=\"save_as_draft\">Save as Draft</button><button type=\"submit\" id=\"save_and_publish\">Save and Publish</button>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<span>Published: Yes</span>";
},"9":function(container,depth0,helpers,partials,data) {
    return "<span>Published: No</span>";
},"11":function(container,depth0,helpers,partials,data) {
    return "<label for=\"headline\">Headline</label><input type=\"text\" id=\"headline\" name=\"headline\"><label for=\"teaser\">Teaser</label><input type=\"text\" id=\"teaser\" name=\"teaser\"><label for=\"body\">body</label><textarea id=\"body\" name=\"body\"></textarea><button type=\"submit\" id=\"save_as_draft\">Save as Draft</button><button type=\"submit\" id=\"save_and_publish\">Save and Publish</button>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"add_or_edit\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.article : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "</form></div>";
},"useData":true});

this["JST"]["user"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "<li><div class=\"article\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\"><p class=\"index\">"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
    + "<p><h3>"
    + alias2(alias1((depth0 != null ? depth0.headline : depth0), depth0))
    + "</h3><small>"
    + alias2((helpers.secondsToDate || (depth0 && depth0.secondsToDate) || alias4).call(alias3,(depth0 != null ? depth0.post_date : depth0),{"name":"secondsToDate","hash":{},"data":data}))
    + "</small><p>"
    + alias2(alias1((depth0 != null ? depth0.teaser : depth0), depth0))
    + "</p></div></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"user\"><h2>User</h2><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.articles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><footer><a id=\"page_back\">Back</a><a id=\"page_next\">Next</a></footer></div>";
},"useData":true});

this["JST"]["view_article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"view_article\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\" id=\"refresh\">Changes Occurred: Click to Refresh</a><p id=\"removed\">Article Removed</p><h2>"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2><small>"
    + alias4((helpers.secondsToDate || (depth0 && depth0.secondsToDate) || alias2).call(alias1,(depth0 != null ? depth0.post_date : depth0),{"name":"secondsToDate","hash":{},"data":data}))
    + "</small><p>"
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "</p></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.article : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});