 define([
  'Congreso',  
  'jquery',
  'underscore',
  'backbone'  
], function(Congreso, $, _, Backbone) {
  // Extend here Backbone.model.
  // In the futere we may use this to make custom methods.
  var BaseModel = Backbone.Model.extend({
    initialize: function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      this.init && this.init(attributes, options);
    }
    , defaultErrorHandler: function(model, error) {
      if (error.status == 301 || error.status == 403) {
        alert("Recurso movido")
      }
    }
  });

  return BaseModel;
});