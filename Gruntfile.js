module.exports = function(grunt) {
  grunt.initConfig({
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
        dist: 'dist',
        build_branch: 'gh-pages',
        pull: true
      },
      gh_pages: {
        // Target-specific file lists and/or options go here.
      },
    },    
    clean: {
      build: ["dist"]
    },
    copy: {
      dist: {
        files: {
          'dist/index.html': 'src/index.html',
          'dist/js/vendor/requirejs/require.js': 'src/js/vendor/requirejs/require.js'
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
  // LiveReload Plugin
  // grunt.loadNpmTasks('grunt-regarde');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-livereload');  


  // Default task(s).
  // grunt.registerTask('default', ['clean','jade', 'jshint','useminPrepare', 'requirejs','cssmin','copy', 'usemin']);
  grunt.registerTask('default', ['clean','jade', 'jshint','useminPrepare', 'requirejs','copy', 'usemin']);
};