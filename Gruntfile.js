module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'specs/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }

    },
	protractor: {
      options: {
        keepAlive: true,
        configFile: "protractor.conf.js"
      },
      singlerun: {},
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444
          }
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'protractor:singlerun']);

};