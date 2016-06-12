var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');


gulp.task('styles',function(){
  gulp
  .src('sass/style.scss')
  .pipe(sass())
  .pipe(rename('main.css'))
  .pipe(gulp.dest('assets/css'))

});

function compile(watch){
  var bundle = watchify(browserify('./src/index.js'));

  function rebundle(){
    bundle
      .transform(babel)
      .bundle()
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public/js'))
  }

  if (watch) {
    bundle.on('update',function(){
      console.log('--> Building');
      rebundle();
    });
  }
  rebundle();
}

gulp.task('assets',function(){
  gulp
    .src('assets/**/*')
    .pipe(gulp.dest('public'))
})
gulp.task('build', function(){ return compile() });
gulp.task('watch', function(){ return compile(true) });

gulp.task('default',['styles','assets','build'])
