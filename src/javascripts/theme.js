( function( $ ) {
  if( !( $ ) ) { return; }

  $( document ).ready( function() {
    function addIcon( target, iconClass ) {
      $( target ).each( function() {
        $( '<i>' ).addClass( iconClass ).prependTo( $( this ) );
      } );
    }

    function replace( target, text ) {
      $( target ).each( function() {
        $( '<strong>' ).text( text ).prependTo( $( this ) );
      } );
    }

    // Editor toolbar
    $( '.jstElements' ).removeClass( 'jstElements' ).addClass( 'js-replace-jstElements' );
    addIcon( '.jstb_strong', 'js-replace-icon-strong' );
    addIcon( '.jstb_em',     'js-replace-icon-italic' );
    addIcon( '.jstb_ins',    'js-replace-icon-underline' );
    addIcon( '.jstb_del',    'js-replace-icon-strike' );
    replace( '.jstb_code',    'C' );
    replace( '.jstb_h1',     'H1' );
    replace( '.jstb_h2',     'H2' );
    replace( '.jstb_h3',     'H3' );
    addIcon( '.jstb_ul',     'js-replace-icon-ul' );
    addIcon( '.jstb_ol',     'js-replace-icon-ol' );
    addIcon( '.jstb_bq',     'js-replace-icon-bq' );
    addIcon( '.jstb_unbq',   'js-replace-icon-unbq' );
    addIcon( '.jstb_pre',    'js-replace-icon-pre' );
    addIcon( '.jstb_link',   'js-replace-icon-link' );
    addIcon( '.jstb_img',    'js-replace-icon-image' );
    addIcon( '.jstb_help',   'js-replace-icon-help' );

    // a > img icons
    $( 'a[onclick*="removeFileField(this);"]' ).addClass( 'js-replace-icon-trash' ).empty();
    $( 'a[data-method="delete"]'              ).addClass( 'js-replace-icon-trash' );
    $( 'img[src*="toggle_check.png"]'         ).replaceWith( $( '<i>' ).addClass( 'js-replace-icon-check' ) );
    $( 'img[src*="edit.png"]'         ).replaceWith( $( '<i>' ).addClass( 'js-replace-icon-edit' ) );
    $( 'a[href*="edit?section="]'             ).addClass( 'js-replace-icon-edit' ).empty();
    $( 'a[href*="quoted?journal_id="]'        ).addClass( 'js-replace-icon-comment' ).empty();
    $( 'a[onclick*="journals/edit"]'          ).addClass( 'js-replace-icon-edit' ).empty();
  } );
} )( jQuery );
