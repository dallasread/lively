var gulp = require('gulp'),
    argv = require('yargs').argv,
    APIDeploy = require('/Users/dread/Apps/api-deploy').create('./deploy.json');

gulp.task('api-sdk', function(done) {
    APIDeploy.sdk(done);
});

gulp.task('api-deploy', function(done) {
    APIDeploy.deploy(argv.name, done);
});
