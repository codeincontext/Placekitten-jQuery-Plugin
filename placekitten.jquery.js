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

      // Get properties of target
  		var style = window.getComputedStyle(this).cssText;

  		var height = $element.height(),
           width = $element.width();

      // Swap target for kitten image
      var imageUrl = 'http://placekitten.com/' + width + '/' + height;
      var $kitten = $('<img src="' + imageUrl + '" />');

      // Load target css into kitten element
      $kitten[0].style.cssText = style;
      
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