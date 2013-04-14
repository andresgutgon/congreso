define([
  'Congreso',
  'jquery',
  'underscore',
  'backbone',
  'GroupListView',
  'GroupDetailView'
], function(Congreso, $, _, Backbone, GroupListView,GroupDetailView) {
  var group_base = Congreso.group_base;

  GroupRouter = Backbone.Router.extend({
    routes: {
      '': 'groupList'
      ,'group' : 'groupList'
      , "group/:id": 'groupDetail'
    }
    , groupList: function() {
      Congreso.root_element.html(new GroupListView().el);
    }
    , groupDetail: function(id) {      
      Congreso.root_element.html(new GroupDetailView({id:id}).el);
    }
  });

  return GroupRouter;
});  