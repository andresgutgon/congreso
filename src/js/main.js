require.config({
  shim : {
    backbone_tastypie : {
      deps : ['underscore', 'backbone'],
      exports : 'Backbone'
    },
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    jade: {
      exports: 'jade'
    }    
  },
  // Load here all dependencies
  paths : {
    // Congreso is the global namespace
    'Congreso'           : 'congreso',
    // Dependencies
    // To interprect JADE templates in the browser we need jadeRuntime file.
    jade                 : 'libs/jadeRuntime',
    jquery               : 'vendor/jquery/jquery',
    underscore           : 'vendor/underscore/underscore',
    backbone             : 'vendor/backbone/backbone',
    'backbone.wreqr'     : 'vendor/backbone.wreqr/backbone.wreqr',
    'backbone.babysitter': 'vendoe/backbone.babysitter/backbone.babysitter',
    marionette           : 'vendor/marionette/marionette',
    backbone_tastypie    : 'vendor/backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie',
    // App specific Modules
    'Templates'          : 'templates',
    'App'                : 'app',
    'Router'             : 'router',
    // Home
    'HomeView'           : 'views/home/home',
    // Base Module
    'BaseModel'          : 'modules/base/base_model',
    'BaseCollection'     : 'modules/base/base_collections',
    // Groups End Point
    'GroupModel'         : 'modules/group/group_model',
    'GroupRouter'        : 'modules/group/group_router',
    'GroupCollection'    : 'modules/group/group_collections',
    'GroupListView'      : 'modules/group/views/list',
    'GroupItemView'      : 'modules/group/views/item',
    'GroupDetailView'    : 'modules/group/views/detail',
    // Members End Point
    'MemberModel'        : 'modules/member/member_model',
    'MemberRouter'       : 'modules/member/member_router',
    'MemberDetailView'   : 'modules/member/views/detail'
  }

});

require([
  "Congreso",
  "jquery",
  "backbone",
  "App"
],
function(congreso, $, Backbone, App) {

  // Treat the jQuery ready function as the entry point to the application.
  // Inside this function, kick-off all initialization, everything up to this
  // point should be definitions.
  $(function() {
    App.initialize();
  });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router.  If the link has a data-bypass
  // attribute, bypass the delegation completely.
  $(document).on("click", "a:not([data-bypass])", function(evt) {
    // Get the anchor href and protcol
    var href = $(this).attr("href");
    var protocol = this.protocol + "//";

    // Ensure the protocol is not part of URL, meaning its relative.
    if (href && href.slice(0, protocol.length) !== protocol &&
        href.indexOf('javascript:') !== 0) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events.  The Router's internal `navigate` method
      // calls this anyways.
      Backbone.history.navigate(href, true);
    }
  });

});
