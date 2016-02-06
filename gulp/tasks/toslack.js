require('dotenv').config();
var gulp = require('gulp');
var Slack = require('node-slack');
var slack = new Slack(process.env.SLACKURL);

/*-------------------------------------------------------------------
Post to Slack
-------------------------------------------------------------------*/
gulp.task('toslack', function() {
	slack.send({
		text: process.env.SLACKTEXT,
		channel: process.env.SLACKCHANNEL,
		username: process.env.SLACKUSERNAME,
		icon_emoji: process.env.SLACKICONEMOJI,
	})
});