module.exports = function(grunt) {
		grunt.initConfig({

			watch:{
				files: ["*.html", "assets/**", "!public/**", "!node_modules/**"],
				tasks: ["less:development"]
			},

			less: {
				development: {
					options: {
						paths: ["assets/less"]
					},
					files: {"public/css/main.css": "assets/less/all.less"}
				},
				production: {
					options: {
						paths: ["src/css"],
						cleancss: true
					},
					files: {"public/css/main.css": "assets/less/all.less"}
				}
			}
		});
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-less');
		grunt.registerTask('default', ['less']);
	};
