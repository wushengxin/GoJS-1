module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});

	grunt.registerTask('default', function() {

		grunt.initConfig({
			uglify: {
				options: {
					mangle: false
				},
				default: {
					files: {
						'js/ef.js': ['js/e.js', 'js/f.js']
					}
				}
			}
		});

		grunt.task.run(['uglify']);
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};