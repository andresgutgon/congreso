define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'GroupCollection',
  'GroupItemView'
], function($, _, Backbone, Templates, GroupCollection, GroupItemView) {
  var GroupListView;

  GroupListView = Backbone.View.extend({
    className: 'groups'
    , initialize: function () {
      this.collection = new GroupCollection();
      this.template = Templates['group/list.jade'];      
      this.render();
    }
    , render: function() {
      var self = this;
      self.collection.fetch({
        success: function(collection, response) {
          _.each(collection.models, function(group) {
            self.$el.append(new GroupItemView({model:group}).render().el);
          }, this);
        }
      });
    }
      
  });

  return GroupListView;
});