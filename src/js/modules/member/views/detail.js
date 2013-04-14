define([
  'Congreso',  
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'MemberModel'
], function(Congreso, $, _, Backbone, Templates, MemberModel) {  

  var MemberDetailView = Backbone.View.extend({
    className: 'member-detail'
    , initialize: function (attr) {
      this.model = new MemberModel({id: attr.id});
      this.template = Templates['member/detail.jade'];      
      this.render();
    }
    , render: function() {
      var self = this;
      self.model.fetch({
        success: function(model, response) {          
          self.$el.append(self.template({
            model: model.toJSON()
            , base_url: Congreso.cogreso_base_url
          }));
        }
      });
    }
      
  });

  return MemberDetailView;
});