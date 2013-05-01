 define([
  'Congreso',
  'jquery',
  'underscore',
  'backbone',  
  'BaseModel'
], function(Congreso, $, _, Backbone, BaseModel) {
  
  var MemberModel = BaseModel.extend({
    initialize: function(attributes, options) {
      this.id = attributes.id || null;
    }
    , url: function() {
      return Congreso.colibri_api_end_point + "/member/" + this.id + "/" + Congreso.colibri_api_format;
    }  
    , getPermalink: function () {
      return "#member/" + this.id;
    }
  });

  return MemberModel;
});