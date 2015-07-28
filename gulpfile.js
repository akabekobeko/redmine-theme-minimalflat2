var gulp = require( 'gulp' );
var $    = require( 'gulp-load-plugins' )();

// 共通タスク設定
var common = {
  src:  './src',
  dest: './dist'
};

// Stylus コンパイルと結合
gulp.task( 'stylus', function() {
  return gulp.src( [ common.src + '/stylus/App.styl' ] )
    .pipe( $.plumber() )
    .pipe( $.sourcemaps.init() )
    .pipe( $.stylus() )
    .pipe( $.rename( 'bundle.css' ) )
    .pipe( $.sourcemaps.write( '.' ) )
    .pipe( gulp.dest( common.src + '/stylesheets' ) );
} );

// リリース用イメージ削除
gulp.task( 'clean', function( done ) {
  var del = require( 'del' );
  del( [ common.dest ], done );
} );

// ファイル監視
gulp.task( 'watch', [ 'stylus' ], function() {
  gulp.watch( [ common.src + '/stylus/*.styl' ], [ 'stylus'   ] );
} );

// 既定タスク
gulp.task( 'default', [ 'watch' ] );
