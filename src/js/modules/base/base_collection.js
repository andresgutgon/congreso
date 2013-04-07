
 define([
  'Congreso',
  'jquery',
  'underscore',
  'backbone'  
], function(Congreso, $, _, Backbone) {
  
  var BaseCollection = Backbone.Collection.extend({
    initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      this.init && this.init(attributes, options);
    }
    , defaultErrorHandler: function(model, error) {
      if (error.status == 301 || error.status == 403) {
        alert("Recurso movido");
      }
    }    
    , parse: function(response) {
      return response.objects;
    }
  });
  
  return BaseCollection;
});