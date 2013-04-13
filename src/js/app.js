define([
  'jquery',
  'underscore',
  'backbone',
  'GroupRouter'
], function($, _, Backbone, GroupRouter) {

  function initialize() {
    var $loading = $('#loading');
    $loading.html("Cargando...");
    $(document).ajaxStart(function(){ 
      $loading.fadeIn(); 
    });
    $(document).ajaxComplete(function(event, xhr, ajaxOptions){ 
      if (xhr.status === 200 || xhr.status === 301) {
        $loading.fadeOut();         
      }
    });
    $(document).ajaxError(function(){ 
      $loading.html("Ha habido un error. Por favor actualiza la pagina.");
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