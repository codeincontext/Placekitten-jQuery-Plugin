(function($) {
  // PlaceKitten JQuery Plugin
  $.fn.placekitten = function(options, callback) {
    // Setup
    var $elements = this;
    if (!$elements.length) { return $elements; }
    options = $.extend({},$.fn.placekitten.defaults, options);

    // Turn each element selected into a kitten
    $elements.each(function() {
      var $element = $(this);

      // Get css of target
  		var display = $element.css('display'),
        	 height = $element.height(),
          	width = $element.width();

      // Swap target for kitten image
      var imageUrl = 'http://placekitten.com/' + width + '/' + height;
      var $kitten = $('<img src="' + imageUrl + '" />');
      
      // Load target css into kitten element
      $kitten.css({
        'display': display, 
        'width': width, 
        'height': height
      });
      
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