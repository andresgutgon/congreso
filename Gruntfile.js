module.exports = function(grunt) {

  // Project configuration.
  // var path = require('path');
  // var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

  // var folderMount = function folderMount(connect, point) {
  //   return connect.static(path.resolve(point));
  // };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // connect: {
    //   livereload: {
    //     options: {
    //       port: 9001,
    //       middleware: function(connect, options) {
    //         return [lrSnippet, folderMount(connect, options.base)]
    //       }
    //     }
    //   }
    // },    
    // jshint: {
    //   // define the files to lint
    //   files: ['gruntfile.js', 'src/congreso/*.js'],
    //   // configure JSHint (documented at http://www.jshint.com/docs/)
    //   options: {
    //       // more options here if you want to override JSHint defaults
    //     globals: {
    //       jQuery: true,
    //       console: true,
    //       module: true
    //     },
    //     laxcomma: true
    //   }
    // },
    // clean: {
    //   build: ["dist"]
    // },
    // copy: {
    //   dist: {
    //     files: {
    //       'dist/index.html': 'src/index.html',
    //       'dist/js/lib/core/require.js': 'src/js/lib/core/require.js'
    //     }
    //   }
    // },    
    jade: {
      compile: {
        options: {
          debug: false,
          client: true,
          amd: true,        
          compileDebug: false,        
          namespace: "Templates",
          processName: function(filename) {
            filename = filename.replace("src/templates/","");
            filename = filename.replace("\\.jade","");
            return filename;
          }          
        },
        files: {
          "src/js/templates.js": ["src/templates/**/*.jade"]
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/templates/**/*.jade', 'src/sass/**/*.sass','src/sass/**/*.scss'],
        tasks: ['jade', 'compass'],
        options: {
          debounceDelay: 250
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    }
    // reguarde es como watch pero para LiveReload.
    // regarde: {
    //   js: {
    //     files: ['src/js/**/*.js', 'src/css/**/*.css', 'src/index.html'],
    //     tasks: ['livereload']
    //   }
    // }, 
    // useminPrepare: {
    //   html: 'src/index.html',
    //   dest: 'dist'
    // },
    // usemin: {
    //   html: ['dist/index.html'],
    //   options: {
    //     dirs: ['dist']
    //   }            
    // },
    // cssmin: {
    //   compress: {
    //     files: {
    //       'dist/css/app.min.css': ['src/css/normalize.css', 'src/css/app.css']
    //     }
    //   }
    // },      
    // requirejs: {
    //     compile: {
    //         options: {
    //           name: "congreso",
    //           baseUrl: "src/js",
    //           mainConfigFile: "src/js/congreso.js",
    //           out: "dist/js/congreso.min.js",
    //           wrap: true
    //         }
    //     }
    // }
  });

  // Plugins
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  // grunt.loadNpmTasks('grunt-contrib-requirejs');
  // grunt.loadNpmTasks('grunt-usemin');
  // LiveReload Plugin
  // grunt.loadNpmTasks('grunt-regarde');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-livereload');  


  // Default task(s).
  // grunt.registerTask('default', ['jade', 'jshint', 'useminPrepare', 'requirejs', 'concat', 'uglify', 'usemin']);

  // grunt.registerTask('default', ['clean','jade', 'jshint','useminPrepare', 'requirejs','cssmin','copy', 'usemin']);

  // This tasks are to monitorize and update browser on development when fles changes.
  // grunt.registerTask('live', ['livereload-start', 'connect', 'regarde']);
};