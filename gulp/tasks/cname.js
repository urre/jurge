var gulp = require('gulp');
var fs = require('fs');
require('dotenv').config();

/*-------------------------------------------------------------------
Insert CNAME file in _site
-------------------------------------------------------------------*/
gulp.task("cname", function () {
   fs.writeFileSync('_site/CNAME', process.env.DOMAIN);
});
