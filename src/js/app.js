define('App', [
  'jquery',
  'underscore',
  'backbone',
  'Router'
], function($, _, Backbone, Router) {

  function initialize() {
    var $loading = $('#loading');
    $(document).ajaxStart(function(){ 
      $loading.fadeIn(); 
    });
    $(document).ajaxComplete(function(){ 
      $loading.fadeOut(); 
    });

    var app = new Router();
    Backbone.history.start();
  }

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});