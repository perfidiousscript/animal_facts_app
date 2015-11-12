module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                src: 'client/scripts/*.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules/angular',
                src: [
                    "angular.min.js",
                    "angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: 'client/public/assets/views',
                src: "*.html",
                "dest": "server/public/assets/views/"
            },
            style: {
                expand: true,
                cwd: 'client/public/assets/styles',
                src: [
                    "stylesheet.css"
                ],
                "dest": "server/public/assets/styles/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['copy', 'uglify']);

};