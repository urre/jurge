var gulp = require('gulp');
var runSequence = require('run-sequence');
var slack = require('gulp-slack') ({
	    url: process.env.SLACKURL,
	    channel: process.env.SLACKCHANNEL,
	    user: process.env.SLACKUSERNAME,
	    icon_emoji: process.env.SLACKICONEMOJI,
});

/*-------------------------------------------------------------------
Deploy, run tasks in sequence
-------------------------------------------------------------------*/
gulp.task('deploy', function(done) {
    runSequence('jekyll', 'cname', 'surge', 'slack', function() {
        done();
    });
});
