(function ($) {
  if (!($)) {
    return
  }

  // Tree view (only projects page)
  function setupProjectTreeView () {
    function toggleExpandSymbol (area) {
      area.children('i.expander').each(function () {
        var expanded = 'expanded'
        if ($(this).hasClass(expanded)) {
          $(this).removeClass(expanded)
        } else {
          $(this).addClass(expanded)
        }
      })
    }

    $('.projects.root > li.root > div.root, .projects.root > li.root > ul.projects li.child div.child').each(function () {
      var area = $(this)
      $(this).children('a.project').wrap('<div class="header">')
      $(this).children('.header').each(function () {
        // Add expander
        if (area.next().is('ul.projects')) {
          $(this).prepend($('<i>').addClass('expander'))
        }

        area.next('ul.projects').toggle()
      })
        .on('click', function () {
          area.next('ul.projects').toggle()
          toggleExpandSymbol($(this))
        })
    })
  }

  // The table can be scrolled when "My Page" is displayed in one column
  function setupMyPageAutoScroll () {
    $('#my-page table').each(function () {
      var parent = $(this).parent()
      if (parent.hasClass('autoscroll')) {
        return
      }

      $(this).wrap($('<div class="autoscroll"></div>'))
    })
  }

  $(document).ready(function () {
    setupProjectTreeView()
    setupMyPageAutoScroll()
  })
})(window.jQuery)
