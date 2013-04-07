define([
  // Libs
  "jquery",
  "underscore",
  "backbone"
],

function($, _, Backbone) {
  var version = 1
  , Congreso = {
    colibri_api_end_point: "http://proyectocolibri.es/api/v" + version
    , colibri_api_format: "?format=json"
  };

  return Congreso;
});
