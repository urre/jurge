var gulp = require('gulp');
require('dotenv').config();

var slack = require('gulp-slack') ({
	    url: process.env.SLACKURL,
	    channel: process.env.SLACKCHANNEL,
	    user: process.env.SLACKUSERNAME,
	    icon_emoji: process.env.SLACKICONEMOJI,
});

/*-------------------------------------------------------------------
Post to Slack
-------------------------------------------------------------------*/
gulp.task('slack', function() {
    return gulp.src('./')
        .pipe(slack(process.env.SLACKTEXT));
});
