 define([
  'Congreso',
  'jquery',
  'underscore',
  'backbone',  
  'BaseModel'
], function(Congreso, $, _, Backbone, BaseModel) {
  
  var GroupModel = BaseModel.extend({
    url: Congreso.colibri_api_end_point + "/group" + Congreso.colibri_api_format
    , getPermalink: function () {
    	return "#groups/" + this.id;
    }
  });

  return GroupModel;
});