$(function() {

	// Calculator slider

	$( '.calc-slider' ).slider({
		value: 5,
		min: 0,
		max: 50,
		step: 5,
		range: 'min',
		slide: function( event, ui ) {
			$( '.calc__box' ).text( ui.value + 'м' );
			$( '.calc-min' ).text((ui.value * 1500) + ' Р');
			$( '.calc-max' ).text((ui.value * 2500) + ' Р');
			$( '.hidden-length' ).val(ui.value);
		}
	});

	$( '.hidden-length' ).val($( '.calc-slider' ).slider( 'value' ));
	$( '.calc-min' ).text($( '.calc-slider' ).slider( 'value' ) * 1500);
	$( '.calc-max' ).text($( '.calc-slider' ).slider( 'value' ) * 2500);

	// Magnific popup

	$( '.form-submit--calc' ).magnificPopup()

	// OWL carousel

	$('.slider').owlCarousel({items: 1, dotsContainer: '#carousel-custom-dots'});

	$('.owl-dot').click(function () {
		$('.slider').trigger('to.owl.carousel', [$(this).index(), 300]);
	});


  // Mobile button (JS / Jquery)

  var toggles = document.querySelectorAll('.c-hamburger');

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( 'click', function(e) {
      e.preventDefault();
      (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');
      var mobWrap = $('.mob-wrap').css('display');
      (mobWrap == 'block') ? $('.mob-wrap').css({'display' : 'none'}) : $('.mob-wrap').css({'display' : 'block'});
      $('.box-mob').slideToggle();
    });
  }

});
