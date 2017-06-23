(function ($, Drupal) {
  Drupal.behaviors.whales = {
    attach: function (context, settings) {
      $(context).find('.region-sidebar-first').once('fix-layout').each(function () {
        $('body').addClass('with-sidebar');
      });
    }
  };
})(jQuery, Drupal);
