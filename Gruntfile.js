module.exports = function(grunt) {
  var execSync = require('execSync')
    , default_tasks= ['clean:build','jade', 'jshint','useminPrepare', 'copy:build', 'development_server']
    , config = {
        src: 'src'
      , build: 'build'
      , dist: 'dist'
      , port: 9000
    };

  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['<%= config.build %>'],
      dist: ['<%= config.dist %>']
    },
    watch: {
      javascripts: {
        options: {
          debounceDelay: 250
        }
      , files: ['<%= config.src %>/templates/**/*.jade', '<%= config.src %>/sass/**/*.sass','src/sass/**/*.scss']
      , tasks: ['jade', 'compass']
      }
    , vendor: {
        options: {
          debounceDelay: 250
        }
      , files: ['<%= config.src %>/js/vendor/**/*.js', 'src/sass/**/*.sass','src/sass/**/*.scss']
      , tasks: ['jade', 'compass']
      }
    },
    jshint: {
      // define the files to lint
      files: ['gruntfile.js', 'src/js/modules/**/*.js', 'src/js/main.js', 'src/js/congreso.js', 'src/js/app.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        },
        laxcomma: true,
        scripturl: true
      }
    },
    build_gh_pages: {
      options: {
        dist: '<%= config.dist %>',
        build_branch: 'gh-pages',
        pull: true
      },
      gh_pages: {
        // Target-specific file lists and/or options go here.
      }
    },
    copy: {
      build_vendor: {
        files: {'<%= config.build %>/js/require.js': '<%= config.src %>/js/vendor/requirejs/require.js'}
      , files: {src: ['<%= config.src %>/js/libs/jadeRuntime.js'], dest: ['<%= config.build %>/js/vendor/']}
      }
    },    
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
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    useminPrepare: {
      html: 'src/index.html',
      dest: 'dist'
    },
    usemin: {
      html: ['dist/index.html'],
      options: {
        dirs: ['dist']
      }            
    },
    // cssmin: {
    //   compress: {
    //     files: {
    //       'dist/css/app.min.css': ['src/css/normalize.css', 'src/css/app.css']
    //     }
    //   }
    // }, 
    bower: {
      target: {
        rjsConfig: '<%= config.build %>/js/main.js'
      }
    },         
    requirejs: {
      compile: {
        options: {
          name: 'main',
          baseUrl: "<%= config.build %>/js",
          mainConfigFile: "<%= config.build %>/js/main.js",
          out: "<%= config.dist %>/js/main.min.js",
          wrap: true
        }
      }
    } 
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-build-gh-pages');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-devserver');
  
  // Custom tasks
  grunt.registerTask('development_server', 'Runs a development server', function () {
    var express = require('express')
      , done = this.async()
      , app = express()
      , dir = __dirname + '/' + config.build;
    app.use(express.logger()); // comment this line out to avoid the request log
    app.use('/' + config.build, express.static(dir));
    app.use('/' + config.build, express.directory(dir)); // nice file listings
    app.listen(config.port).on('close', done);
    grunt.log.writeln(dir);
    grunt.log.writeln("Webserver started at http://localhost:" + config.port + '/');
  });  

  // Registered tasks
  grunt.registerTask('deploy', ['default', 'build_gh_pages']);

  grunt.registerTask('default', default_tasks);
};