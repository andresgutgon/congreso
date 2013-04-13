define([
  'Congreso',  
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'GroupModel'
], function(Congreso, $, _, Backbone, Templates, GroupModel) {  
  var GroupItemView;

  var GroupDetailView = Backbone.View.extend({
    className: 'group-detail'
    , initialize: function (attr) {
      this.model = new GroupModel({id: attr.id});
      this.template = Templates['group/detail.jade'];      
      this.render();
    }
    , render: function() {
      var self = this;
      self.model.fetch({
        success: function(model, response) {          
          self.$el.append(self.template({model: model.toJSON(), base_url: Congreso.cogreso_base_url}));
        }
      });
    }
      
  });

  return GroupDetailView;
});