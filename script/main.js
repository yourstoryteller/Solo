
$(window).on('load', function() {

	/*==== PRELOADER ====*/
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow':'visible'});

  /*==== WORK ====*/
  // filter .metal items
	$('#work-wrapper .row').isotope({

	});

	// filter items on button click
	$('#isotope-filters').on( 'click', 'button', function() {
  	var filterValue = $(this).attr('data-filter');
  	 $('#work-wrapper .row').isotope({ filter: filterValue });

  	 // Active button
  	 $('#isotope-filters').find('.active').removeClass('active');
  	 $(this).addClass('active');
	});

	// Zoom items on hover using Magnific Popup
	$('#work-wrapper').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type:'image',
		gallery: {
			enabled: true
		},
	});

})

$(document).ready(function(){

	/*==== TEAM ====*/
  $("#team-members").owlCarousel({
  	items: 2,
  	autoplay: true,
  	autoplayHoverPause: true,
  	loop: true,
  	smartSpeed: 700,
  	nav: true,
  	dots: false
  });

  /*-- Skill --*/
	$('#progress-elements').waypoint(function() {

		$('.progress-bar').each(function () {
			$(this).animate({
				width: $(this).attr('aria-valuenow') + "%",
			}, 1000);
		});

		this.destroy();

	}, {
		offset: 'bottom-in-view'
	});

  /*==== TESTIMONIALS ====*/
  $("#testimonial-slider").owlCarousel({
  	items: 1,
  	autoplay: true,
  	autoplayHoverPause: true,
  	loop: true,
  	smartSpeed: 700,
  	nav: true,
  	dots: false
  });

  /*==== CLIENTS ====*/
  $("#clients-list").owlCarousel({
  	items: 6,
  	autoplay: true,
  	autoplayHoverPause: true,
  	loop: true,
  	smartSpeed: 700,
  	nav: true,
  	dots: false
  });

	/*==== SERVICES ====*/	
	$('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion',
		animation: 'slide', // The panels will slide up and down
	});

	/*==== STATS ====*/
	$('.counter').counterUp({
    delay: 10,
    time: 1000,
	});	
});

