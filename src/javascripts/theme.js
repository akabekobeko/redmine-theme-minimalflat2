( function( $ ) {
  if( !( $ ) ) { return; }

  // Setup icon
  function setupIcon() {
    function imageToIcon( target, icon ) {
      $( target ).each( function() {
        var title = $( this ).attr( 'alt' );
        $( this ).replaceWith( $( '<i>' ).addClass( icon ).attr( 'title', title ).on( 'click', function() {
          if( target === 'img[src*="toggle_check.png"]' && typeof toggleIssuesSelection === 'function' ) {
            toggleIssuesSelection( $( this ).parent() );
            return false;
          }
        } ) );
      } );
    }

    // img
    imageToIcon( 'img[src*="toggle_check.png"]',       'js-replace-icon-check'          );
    imageToIcon( 'img[src*="true.png"]',               'js-replace-icon-check'          );
    imageToIcon( 'img[src*="false.png"]',              'js-replace-icon-cross'          );
    imageToIcon( 'img[src*="exclamation.png"]',        'js-replace-icon-warning'        );
    imageToIcon( 'img[src*="delete.png"]',             'js-replace-icon-trash'          );
    imageToIcon( 'img[src*="add.png"]',                'js-replace-icon-add'            );
    imageToIcon( 'img[src*="edit.png"]',               'js-replace-icon-edit'           );
    imageToIcon( 'img[src*="comment.png"]',            'js-replace-icon-comment'        );
    imageToIcon( 'img[src*="bullet_toggle_plus.png"]', 'js-replace-icon-toggle-plus'    );
    imageToIcon( 'img[src*="link_break.png"]',         'js-replace-icon-trash'          );
    imageToIcon( 'img[src*="2uparrow.png"]',           'js-replace-icon-chevron-top'    );
    imageToIcon( 'img[src*="1uparrow.png"]',           'js-replace-icon-chevron-up'     );
    imageToIcon( 'img[src*="1downarrow.png"]',         'js-replace-icon-chevron-down'   );
    imageToIcon( 'img[src*="2downarrow.png"]',         'js-replace-icon-chevron-bottom' );

    // Pending because there is a jQuery UI problems
    //imageToIcon( 'img[src*="calendar.png"]', 'js-replace-icon-calendar' );
  }

  // Tree view ( only projects page )
  function setupProjectTreeView() {
    function toggleExpandSymbol( area ) {
      area.children( 'i.expander' ).each( function() {
        var expanded = 'expanded';
        if( $( this ).hasClass( expanded ) ) {
          $( this ).removeClass( expanded );
        } else {
          $( this ).addClass( expanded );
        }
      } );
    }

    $( '.projects.root > li.root > div.root, .projects.root > li.root > ul.projects li.child div.child' ).each( function() {
      var area = $( this );
      $( this ).children( 'a.project' ).wrap( '<div class="header">' );
      $( this ).children( '.header' ).each( function() {
        // Add expander
        if( area.next().is( 'ul.projects' ) ) {
          $( this ).prepend( $( '<i>' ).addClass( 'expander' ) );
        }

        area.next( 'ul.projects' ).toggle();
      } )
      .on( 'click', function() {
        area.next( 'ul.projects' ).toggle();
        toggleExpandSymbol( $( this ) );
      } );
    } );
  }

  $( document ).ready( function() {
    setupIcon();
    setupProjectTreeView();
  } );
} )( window.jQuery );
