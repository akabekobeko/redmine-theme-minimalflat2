var gulp = require( 'gulp' );
var $    = require( 'gulp-load-plugins' )();

// 共通タスク設定
var common = {
  src:       './src',
  dest:      './dist',
  archive:   './dist/minimalflat2',
  isRelease: false
};

// Stylus コンパイルと結合
gulp.task( 'build:css', function() {
  var isSourceMaps = !( common.isRelease );
  var dest         = ( common.isRelease ? common.archive : common.src );

  return gulp.src( [ common.src + '/stylus/App.styl' ] )
    .pipe( $.plumber() )
    .pipe( $.if( isSourceMaps, $.sourcemaps.init() ) )
    .pipe( $.stylus() )
    .pipe( $.rename( 'application.css' ) )
    .pipe( $.if( isSourceMaps, $.sourcemaps.write( '.' ) ) )
    .pipe( gulp.dest( dest + '/stylesheets' ) );
} );

// リリース用イメージ削除
gulp.task( 'release:clean', function( done ) {
  var del = require( 'del' );
  del( [ common.dest, './minimalflat2.zip' ], done );
} );

gulp.task( 'release:css', [ 'release:clean' ], function( done ) {
  var runSequence = require( 'run-sequence' );
  common.isRelease = true;
  runSequence( 'build:css', done );
} );

// リリース用ドキュメントのコピー
gulp.task( 'release:copy-doc', [ 'release:css' ], function() {
  var src = [
    './README.md',
    './ss.png',
    './LICENSE.txt'
  ];

  return gulp.src( src )
    .pipe( gulp.dest( common.archive ) );
} );

// リリース用ファイルのコピー
gulp.task( 'release:copy', [ 'release:copy-doc' ], function() {
  var src = [
    common.src + '/javascripts/theme.js',
    common.src + '/favicon/favicon.ico',
    common.src + '/fonts/**'
  ];

  return gulp.src( src, { base: common.src } )
    .pipe( gulp.dest( common.archive ) );
} );

// リリース用イメージのビルドと ZIP イメージ生成
gulp.task( 'release', [ 'release:copy', 'release:css' ], function() {
  return gulp.src( common.dest + '/**/*.*' )
    .pipe( $.zip( 'minimalflat2.zip' ) )
    .pipe( gulp.dest( './' ) );
} );

// ファイル監視
gulp.task( 'watch', [ 'build:css' ], function() {
  gulp.watch( [ common.src + '/stylus/*.styl' ], [ 'build:css'   ] );
} );

// 既定タスク
gulp.task( 'default', [ 'watch' ] );
