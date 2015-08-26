( function( $ ) {
  if( !( $ ) ) { return; }

  $( document ).ready( function() {
    function buttonIcon( target, iconClass ) {
      $( target ).each( function() {
        $( '<i>' ).addClass( iconClass ).prependTo( $( this ) );
      } );
    }

    function buttonText( target, text ) {
      $( target ).each( function() {
        $( '<strong>' ).text( text ).prependTo( $( this ) );
      } );
    }

    function imageToIcon( target, icon ) {
      $( target ).each( function() {
        var title = $( this ).attr( 'alt' );
        $( this ).replaceWith( $( '<i>' ).addClass( icon ).attr( 'title', title ) );
      } );
    }

    // Editor toolbar
    $( '.jstElements' ).removeClass( 'jstElements' ).addClass( 'js-replace-jstElements' );
    buttonIcon( '.jstb_strong', 'js-replace-icon-strong' );
    buttonIcon( '.jstb_em',     'js-replace-icon-italic' );
    buttonIcon( '.jstb_ins',    'js-replace-icon-underline' );
    buttonIcon( '.jstb_del',    'js-replace-icon-strike' );
    buttonText( '.jstb_code',   'C' );
    buttonText( '.jstb_h1',     'H1' );
    buttonText( '.jstb_h2',     'H2' );
    buttonText( '.jstb_h3',     'H3' );
    buttonIcon( '.jstb_ul',     'js-replace-icon-ul' );
    buttonIcon( '.jstb_ol',     'js-replace-icon-ol' );
    buttonIcon( '.jstb_bq',     'js-replace-icon-bq' );
    buttonIcon( '.jstb_unbq',   'js-replace-icon-unbq' );
    buttonIcon( '.jstb_pre',    'js-replace-icon-pre' );
    buttonIcon( '.jstb_link',   'js-replace-icon-link' );
    buttonIcon( '.jstb_img',    'js-replace-icon-image' );
    buttonIcon( '.jstb_help',   'js-replace-icon-help' );

    // img
    imageToIcon( 'img[src*="toggle_check.png"]', 'js-replace-icon-check'          );
    imageToIcon( 'img[src*="true.png"]',         'js-replace-icon-check'          );
    imageToIcon( 'img[src*="exclamation.png"]',  'js-replace-icon-warning'        );
    imageToIcon( 'img[src*="delete.png"]',       'js-replace-icon-trash'          );
    imageToIcon( 'img[src*="add.png"]',          'js-replace-icon-add'            );
    imageToIcon( 'img[src*="edit.png"]',         'js-replace-icon-edit'           );
    imageToIcon( 'img[src*="comment.png"]',      'js-replace-icon-comment'        );
    imageToIcon( 'img[src*="calendar.png"]',     'js-replace-icon-calendar'       );
    imageToIcon( 'img[src*="2uparrow.png"]',     'js-replace-icon-chevron-top'    );
    imageToIcon( 'img[src*="1uparrow.png"]',     'js-replace-icon-chevron-up'     );
    imageToIcon( 'img[src*="1downarrow.png"]',   'js-replace-icon-chevron-down'   );
    imageToIcon( 'img[src*="2downarrow.png"]',   'js-replace-icon-chevron-bottom' );
  } );
} )( jQuery );
