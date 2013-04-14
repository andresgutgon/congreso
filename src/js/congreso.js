define([
  // Libs
  "jquery",
  "underscore",
  "backbone"
],

function($, _, Backbone) {
  var version = 1
  , cogreso_base_url = "http://proyectocolibri.es"
  , Congreso = {
    cogreso_base_url: cogreso_base_url 
    , colibri_api_end_point: cogreso_base_url + "/api/v" + version
    , colibri_api_format: "?format=json"
    , root_element: $('#root-element')
  };

  return Congreso;
});
