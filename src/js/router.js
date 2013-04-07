define('Router', [
  'jquery',
  'underscore',
  'backbone',
  'GroupListView',
  'GroupCollection'
], function($, _, Backbone, GroupListView, GroupCollection) {
  var AppRouter, initialize;

  AppRouter = Backbone.Router.extend({
    initialize: function() {
    },
    routes: {
      ''    : 'home'
    , 'home': 'home'
    },
    home: function() {
      $('#root-element').html(new GroupListView().el);
      // var groupList = new GroupCollection();
      // groupList.fetch({
      //   success: function(){        
      //     $('#root-element').html(new GroupListView({model: groupList}).el);
      //   }
      //   , error: function (response) {
      //     console.log(response);
      //   }
      // });      
    },
  });

  return AppRouter;
});