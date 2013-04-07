define([
  'Congreso',  
  'jquery',
  'underscore',
  'backbone',
  'templates',
], function(Congreso, $, _, Backbone, Templates) {
  
  var GroupItemView;

  GroupItemView = Backbone.View.extend({
    className: 'item'
    , initialize: function() {
      this.template = Templates['group/item.jade'];
      this.model.bind("reset", this.render, this);
    },
    
    render:function (eventName) {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }
        
  });

  return GroupItemView;
});