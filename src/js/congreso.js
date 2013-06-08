define([
  // Libs
  "jquery",
  "underscore",
  "backbone"
],

function($, _, Backbone) {
  var version = 1
  // , cogreso_base_url = "http://proyectocolibri.es"
  , cogreso_base_url = "/"
  , Congreso = {
    cogreso_base_url: cogreso_base_url 
    , colibri_api_end_point: cogreso_base_url + "/api/v" + version
    , colibri_api_format: "?format=jsonp"
    , root_element: $('#root-element')
  };

  return Congreso;
});
