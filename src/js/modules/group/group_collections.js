 define([
  'Congreso',
  'jquery',
  'underscore',
  'backbone',
  'BaseCollection',
  'GroupModel'  
], function(Congreso, $, _, Backbone, BaseCollection, GroupModel) {
  
  var GroupCollection = BaseCollection.extend({
    model: GroupModel
    , url: Congreso.colibri_api_end_point + "/group" + Congreso.colibri_api_format
  });  
  
  return GroupCollection;
});