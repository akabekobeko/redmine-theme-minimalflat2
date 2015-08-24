var gulp = require( 'gulp' );
var $    = require( 'gulp-load-plugins' )();

// 共通タスク設定
var common = {
  src:       './src',
  dest:      './dist',
  isRelease: false
};

// Stylus コンパイルと結合
gulp.task( 'stylus', function() {
  var isSourceMaps = !( common.isRelease );
  var dest         = ( common.isRelease ? common.dest : common.src );

  return gulp.src( [ common.src + '/stylus/App.styl' ] )
    .pipe( $.plumber() )
    .pipe( $.if( isSourceMaps, $.sourcemaps.init() ) )
    .pipe( $.stylus() )
    .pipe( $.rename( 'application.css' ) )
    .pipe( $.if( isSourceMaps, $.sourcemaps.write( '.' ) ) )
    .pipe( gulp.dest( dest + '/stylesheets' ) );
} );

// リリース用イメージ削除
gulp.task( 'release:enable', function( done ) {
  common.isRelease = true;
  done();
} );

// リリース用イメージ削除
gulp.task( 'clean', function( done ) {
  var del = require( 'del' );
  del( [ common.dest ], done );
} );

// リリース用ドキュメントのコピー
gulp.task( 'doc', [ 'clean', 'release:enable' ], function() {
  gulp.src( [ './README.md', './LICENSE' ] )
    .pipe( gulp.dest( common.dest ) );
} );

// リリース用イメージのビルド
gulp.task( 'build', [ 'doc', 'stylus' ], function() {
  var src = [
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
