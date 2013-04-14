define([
  'Congreso',  
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function(Congreso, $, _, Backbone, Templates) {
  
  var GroupItemView;

  GroupItemView = Backbone.View.extend({
    tagName: 'li'
    , className: 'group-item'
    , initialize: function() {
      this.template = Templates['group/item.jade'];
      this.model.bind("reset", this.render, this);
    },
    
    render:function (eventName) {
      var attributes = this.model.toJSON();      
      $(this.el).html(this.template({model: this.model, attributes: attributes}));
      return this;
    }
        
  });

  return GroupItemView;
});