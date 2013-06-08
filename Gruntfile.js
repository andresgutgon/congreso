module.exports = function(grunt) {
  var execSync = require('execSync')
    , default_tasks = ['clean:dist','development_server']
    , default_tasks_bk = ['clean:dist','jade', 'jshint','useminPrepare', 'requirejs','copy', 'usemin']
    , config = {
      src: 'src',
      build: 'build',
      dist: 'dist',
      port: 9000
    };

  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
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
    clean: {
      build: ['<%= config.build %>'],
      dist: ['<%= config.dist %>']
    },
    copy: {
      build: {
        files: {
          '<%= config.build %>/index.html': '<%= config.src %>/index.html',
          'build/js/vendor/requirejs/require.js': 'src/js/vendor/requirejs/require.js'
        }
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
    requirejs: {
        compile: {
            options: {
              name: 'main',
              baseUrl: "src/js",
              mainConfigFile: "src/js/main.js",
              out: "dist/js/main.min.js",
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
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-build-gh-pages');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-devserver');
  
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

  
  grunt.registerTask('deploy', ['default', 'build_gh_pages']);

  grunt.registerTask('default', default_tasks);
};