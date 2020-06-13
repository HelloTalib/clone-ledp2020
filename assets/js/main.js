(function ($) {

	'use strict';


	function replaceNumbers(input) {
		var numbers = {
			0: '০',
			1: '১',
			2: '২',
			3: '৩',
			4: '৪',
			5: '৫',
			6: '৬',
			7: '৭',
			8: '৮',
			9: '৯'
		};
		var output = [];
		for (var i = 0; i < input.length; ++i) {
			if (numbers.hasOwnProperty(input[i])) {
				output.push(numbers[input[i]]);
			} else {
				output.push(input[i]);
			}
		}
		return output.join('');
	}

	var countDownDate = new Date("June 20, 2020 23:59:00").getTime();
	var x = setInterval(function () {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("timer").innerHTML = '<div class="days count-box">' + replaceNumbers('' + days + '') + "<span>" + "দিন" + "</span>" + '</div>' + '<div class="hours count-box">' + replaceNumbers('' + hours + '') + "<span>" + "ঘন্টা" + "</span>" + '</div>' + '<div class="minutes count-box">' + replaceNumbers('' + minutes + '') + "<span>" + "মিনিট" + "</span>" + '</div>' + '<div class="seconds count-box">' + replaceNumbers('' + seconds + '') + "<span>" + "সেকেন্ড" + "</span>" + '</div>';

		//document.querySelector('#days').innerText=days;
		if (distance < 0) {
			clearInterval(x);
			// document.getElementById("days").innerHTML = "মুজিববর্ষ";
		}
	}, 1000);
	// smooth scrolling
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.not('[href="#faq1"]')
		.not('[href="#faq2"]')
		.not('[href="#faq3"]')
		.not('[href="#faq4"]')
		.not('[href="#faq5"]')
		.not('[href="#faq6"]')
		.not('[href="#faq7"]')
		.not('[href="#faq8"]')
		.not('[href="#faq9"]')
		.not('[href="#faq9"]')
		.not('[href="#faq10"]')
		.not('[href="#faq11"]')
		.not('[href="#faq12"]')
		.not('[href="#faq13"]')
		.not('[href="#faq14"]')
		.not('[href="#faq15"]')
		.not('[href="#faq16"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top - 15
					}, 700, function () {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex', '-1');
							$target.focus();
						};
					});
				}
			}
		});
	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});



	// Banner Slider active with navigation 
	$('.banner-slider-active-with-navigation').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"> <i class="fas fa-long-arrow-alt-left"></i> </span>',
		nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"> <i class="fas fa-long-arrow-alt-right"></i> </span>'
	});

	// owlCarousel
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 3
			},
			992: {
				items: 5
			}
		}
	})


	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// isotop
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});
	});

	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});




	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();



})(jQuery);