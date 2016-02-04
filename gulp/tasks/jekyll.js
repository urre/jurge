var gulp = require('gulp');
var cp = require("child_process");

/*-------------------------------------------------------------------
Jekyll, build the site
-------------------------------------------------------------------*/
gulp.task("jekyll", function (done) {
    return cp.spawn("jekyll", ["build", "--config", "_config.yml"], {stdio: "inherit"})
    .on("close", done);
});