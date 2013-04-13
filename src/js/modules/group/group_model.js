 define([
  'Congreso',
  'jquery',
  'underscore',
  'backbone',  
  'BaseModel'
], function(Congreso, $, _, Backbone, BaseModel) {
  
  var GroupModel = BaseModel.extend({
    initialize: function(attributes, options) {
      this.id = attributes.id || null;
    }
    , url: function() {
      return Congreso.colibri_api_end_point + "/group/" + this.id + "/" + Congreso.colibri_api_format
    }  
    , getPermalink: function () {
    	return "#groups/" + this.id;
    }
  });

  return GroupModel;
});