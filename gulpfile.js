/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '';

  if(args.branch == 'master') {
    var user = args.user;
    var password = args.password;
  } else {
    var user = args.user_sandbox;
    var password = args.password_sandbox;
  }
  gutil.log('branch', gutil.colors.magenta(args.branch));
  gutil.log('user', gutil.colors.magenta(user));

  var conn = ftp.create({
    host: 'ftp.rammler.ch',
    user: user,
    password: password,
    parallel: 1,
    log: gutil.log
  });

  gulp.src(['./dist/**/*'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});
