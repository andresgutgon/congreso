define([
  'Congreso',
  'jquery',
  'underscore',
  'backbone',
  'MemberDetailView'
], function(Congreso, $, _, Backbone, MemberDetailView) {

  var MemberRouter = Backbone.Router.extend({
    routes: {
      // , 'members': 'memberList'
      "member/:id": 'memberDetail'
    }
    // memberList: function() {
    //   $('#root-element').html(new GroupListView().el);
    // },
    , memberDetail: function(id) {      
      Congreso.root_element.html(new MemberDetailView({id:id}).el);
    }
  });

  return MemberRouter;
});  