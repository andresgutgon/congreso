define([
  'jquery',
  'underscore',
  'backbone',
  'GroupRouter'
], function($, _, Backbone, GroupRouter) {

  function initialize() {
    var $loading = $('#loading');
    $(document).ajaxStart(function(){ 
      $loading.fadeIn(); 
    });
    $(document).ajaxComplete(function(){ 
      $loading.fadeOut(); 
    });

    // Routers of Api End points
    var groupRouter = new GroupRouter();

    //  Start router
    Backbone.history.start();
  }

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});