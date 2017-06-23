module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
      // NOTE: you can have another option here, "dev" that would compile with dev settings,
      // for example sourcemap: true in dev, but false in "dist," so that production builds
      // would not include sourcemaps. You can also enable some minification/compression, etc.
    },
    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.registerTask('default', [
    'sass',
    'watch'
  ]);
};
