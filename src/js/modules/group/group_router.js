define([
  'jquery',
  'underscore',
  'backbone',
  'GroupListView',
  'GroupDetailView',
  'GroupCollection'
], function($, _, Backbone, GroupListView,GroupDetailView, GroupCollection) {
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
    groupDetail: function() {
      $('#root-element').html(new GroupDetailView().el);
    }
  });

  return GroupRouter;
});  