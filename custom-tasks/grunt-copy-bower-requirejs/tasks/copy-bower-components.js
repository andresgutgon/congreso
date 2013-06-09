'use strict';

module.exports = function(grunt) {
  var requirejs = require('requirejs/bin/r.js');
  var path = require('path');
  var _ = grunt.util._; 
    
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  grunt.registerTask('copyBowerComponents', 'Move component main files to build folder', function() {
    var options = grunt.config('copyBowerComponents.options')
      , cb = this.async()
      , config = options.config
      , bower_main_files = require(options.root + options.bower_references)
      , files = []
      , require_references = {}
      , copy_components = {}
      , filePath = options.rjsConfig
      , file = grunt.file.read(filePath)
      , rjsConfig;
        
    // Dinamic copy task to mv commponents main files
    _.each(bower_main_files, function (key, value) {
      files.push({expand: true, cwd: options.root + options.components_dir,  src: key + '.js', dest: options.config.build + '/js/components/'});
      require_references[value] = options.components_dir + key;
    });    

    copy_components['files'] = files;
    grunt.config.set("copy.components", copy_components);
    grunt.task.run('copy:components');

    requirejs.tools.useLib(function (require) {
      rjsConfig = require('transform').modifyConfig(file, function (config) {
        _.extend(config.paths, require_references);
        return config;
      });

      grunt.file.write(filePath, rjsConfig);
      grunt.log.writeln('Updated RequireJS config with installed Bower components'.green);
      cb();
    });    

  });
};