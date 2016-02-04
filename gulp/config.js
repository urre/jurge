/*-------------------------------------------------------------------
Paths
-------------------------------------------------------------------*/

module.exports = {
  basePaths : {
    assets: {
      src: './_assets/',
      dist: './assets/'
    },
    vendor: {
      base: './js/vendor/',
    },
    scripts: {
      base: './_assets/js/',
      dist: './js/'
    },
    bowerjs: {
      base: './bower_components/',
    },
    npm: {
      base: './node_modules/',
    },
    fonts: {
      src: './_assets/fonts/'
    },
    scss: {
      src: './_assets/scss/**/*.{sass,scss}',
      base: './_assets/scss/',
      dist: './css/',
    },
    html: {
      base: './',
      dist: './'
    },
    jekyll: {
      html: './**/*.html',
      posts: '_posts/*.md',
      nonsitehtml: '!_site/**/*.html'
    },
    site: {
      posts: './_posts/',
      dist: './_site/',
      css: './_site/css/',
      js: './_site/js/',
      images: './_site/images/',
      assets: './_site/assets/',
    },
    cloudflare: {
      token: '',
      email: '',
      domain: '',
    }
  }
};
