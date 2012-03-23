(function($) {
  // PlaceKitten JQuery Plugin
  $.fn.placekitten = function(options, callback) {
    // Setup
    var $elements = this;
    if (!$elements.length) { return $elements; }
    options = $.extend({},$.fn.placekitten.defaults, options);

    // Turn each element selected into a kitten
    $elements.each(function() {
      var element = this,
         $element = $(element);

      // Get style of target
      if (cs = window.getComputedStyle(element))
        var style = cs.cssText;

      // Same for IE
      if (!style && element.currentStyle)
        var style = element.currentStyle.cssText;

      // If couldn't get style, the display will have to suffice
      if (!style)
        var display = $element.css('display');

      var height = $element.height(),
           width = $element.width();

      // Swap target for kitten image
      var imageUrl = 'http://placekitten.com/' + width + '/' + height;
      var $kitten = $('<img src="' + imageUrl + '" />');

      // Load target css into kitten element
      if (style) {
        $kitten[0].style.cssText = style;
      } else {
        $kitten.css({
          'display': display,
            'width': width,
           'height': height
        });
      }

      // Swap the element for a kitten
      $element.replaceWith($kitten);
      $kitten.hide().fadeIn(options.fadeSpeed, callback);
    });

    return $elements;
  };

  // default options
  $.fn.placekitten.defaults = {
    fadeSpeed: 500
  };

})(jQuery);