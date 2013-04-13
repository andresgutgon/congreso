define([
  'jquery',
  'underscore',
  'backbone',
  'GroupListView',
  'GroupDetailView'
], function($, _, Backbone, GroupListView,GroupDetailView) {
  var AppRouter;

  GroupRouter = Backbone.Router.extend({
    routes: {
      ''        : 'groupList'
      , 'groups': 'groupList'
      , 'groups/:id': 'groupDetail'
    },
    groupList: function() {
      $('#root-element').html(new GroupListView().el);
    },
    groupDetail: function(id) {      
      $('#root-element').html(new GroupDetailView({id:id}).el);
    }
  });

  return GroupRouter;
});  