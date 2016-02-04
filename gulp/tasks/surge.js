var gulp = require('gulp');
var cp = require("child_process");

/*-------------------------------------------------------------------
Deploy to Surge.sh
-------------------------------------------------------------------*/
gulp.task("surge", function (done) {
   return cp.spawn("surge", ['./'], {cwd: './_site', stdio: "inherit"})
   .on("close", done);
});
