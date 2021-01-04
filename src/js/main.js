;$(function() {

	$(document).scroll(function(e) {
		var scrollTop = $(window).scrollTop();
		var $query = $('header > .nav-wrap');
		var headerHeight = $('header').eq(0).height() || 700;

		if (scrollTop > headerHeight) {
			!$query.hasClass('fixed') && $query.addClass('fixed');
		} else {
			$query.hasClass('fixed') && $query.removeClass('fixed');
		}
	})

	$('.animate-fade').animated("fadeIn", "fadeOut");

	$('.animate-fade-left').animated("fadeInLeftBig", "fadeOutLeftBig");
	$('.animate-fade-right').animated("fadeInRightBig", "fadeOutRightBig");

	$('.animate-fade-up').animated("fadeInUp", "fadeOut");
	$('.animate-fade-down').animated("fadeInDown", "fadeOut");

	$('.parallax-window').parallax();

	$("#owl-slider").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items: 3,
		autoplay: false,
		itemsDesktop: [ 1025, 3 ],
		itemsTablet: [ 769, 2 ],
		itemsMobile: [ 321, 1 ],
	});

	$(document).on('click', '[data-click]', function(e) {
		var $target = $($(this).attr('data-click'));

		if ($target) {
			e.preventDefault();

			if ($target.is(':visible')) {
				$target.fadeOut(200);
			} else {
				$target.fadeIn(200);
			}
			return false;
		}
	});

	$(document).on('click', '#nav-toggle', function(e) {
		e.preventDefault();

		$('header nav.nav').toggle(200);
	});

	$(document).on('click', 'a', function(e) {
		if ($(this).attr('href') === '#')
			e.preventDefault();
	})


	$(window).load(function() {
		setTimeout(function(){ $('#preloader').fadeOut(200) }, 200);
	})
});