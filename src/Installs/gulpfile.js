// var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.less('admin-lte/AdminLTE.less', 'public/LaravelVueAdmin/assets/css');
    mix.less('bootstrap/bootstrap.less', 'public/LaravelVueAdmin/assets/css');
});

/*
var minify = require('gulp-minify');
gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});
*/