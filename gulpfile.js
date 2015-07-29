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
    .pipe( $.rename( 'application.css' ) )
    .pipe( $.sourcemaps.write( '.' ) )
    .pipe( gulp.dest( common.src + '/stylesheets' ) );
} );

// リリース用イメージ削除
gulp.task( 'clean', function( done ) {
  var del = require( 'del' );
  del( [ common.dest ], done );
} );

// リリース用ドキュメントのコピー
gulp.task( 'doc', [ 'clean' ], function() {
  gulp.src( [ './README.md', './LICENSE' ] )
    .pipe( gulp.dest( common.dest ) );
} );

// リリース用イメージのビルド
gulp.task( 'build', [ 'doc', 'stylus' ], function() {
  var src = [
    common.src + '/stylesheets/application.css',
    common.src + '/javascripts/theme.js',
    common.src + '/fonts/**'
  ];

  return gulp.src( src, { base: common.src } )
    .pipe( gulp.dest( common.dest ) );
} );

// リリース用 ZIP イメージ生成
gulp.task( 'release', [ 'build' ], function() {
  return gulp.src( [ common.dest + '/**' ], { base: '.' } )
    .pipe( $.zip( 'minimalflat2.zip' ) )
    .pipe( gulp.dest( './' ) );
} );

// ファイル監視
gulp.task( 'watch', [ 'stylus' ], function() {
  gulp.watch( [ common.src + '/stylus/*.styl' ], [ 'stylus'   ] );
} );

// 既定タスク
gulp.task( 'default', [ 'watch' ] );
