jQuery(document).ready(function () {
  if (jQuery("#clock").length) {
    // Grab date from data attribute
    var weddingDate = jQuery("#clock").data("date");

    // Initialize countdown
    jQuery("#clock").countdown(weddingDate, function (event) {
      // Update the HTML based on the strftime format
      jQuery(this).html(
        event.strftime(
          "" +
            '<div class="box"><div><div class="time">%D</div> <span>Days</span></div></div>' +
            '<div class="box"><div><div class="time">%H</div> <span>Hours</span></div></div>' +
            '<div class="box"><div><div class="time">%M</div> <span>Mins</span></div></div>' +
            '<div class="box"><div><div class="time">%S</div> <span>Secs</span></div></div>'
        )
      );
    });
  }
});
