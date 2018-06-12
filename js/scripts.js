jQuery(document).ready(function($) {
	

	$('#foto-1-btn').on('click', function(){

		$('#foto-1').fadeIn('slow');

	})

	$('#foto-2-btn').on('click', function(){

		$('#foto-2').fadeIn('slow');

	})

	$('#foto-3-btn').on('click', function(){

		$('#foto-3').fadeIn('slow');

	})

	$('#foto-4-btn').on('click', function(){

		$('#foto-4').fadeIn('slow');

	})

	$('#foto-5-btn').on('click', function(){

		$('#foto-5').fadeIn('slow');

	})

	$('#foto-6-btn').on('click', function(){

		$('#foto-6').fadeIn('slow');

	})

	$('.fotorama-close').on('click', function(){

		$('#foto-1').fadeOut('slow');

		$('#foto-2').fadeOut('slow');

		$('#foto-3').fadeOut('slow');

		$('#foto-4').fadeOut('slow');

		$('#foto-5').fadeOut('slow');

		$('#foto-6').fadeOut('slow');

	})



	$('.nav-btn').click(function() {

		$('.popup-wrap').fadeIn('slow');

	});

	$('.popup-close').click(function() {

		$('.popup-wrap').fadeOut('slow');

	});

	$('#tab1-btn').click(function() {
		$('#tab1,#tab2,#tab3,#tab4,#tab5').fadeOut(0);
		$('#tab1').fadeIn(0);
	});
	$('#tab2-btn').click(function() {
		$('#tab1,#tab2,#tab3,#tab4,#tab5').fadeOut(0);
		$('#tab2').fadeIn(0);
	});
	$('#tab3-btn').click(function() {
		$('#tab1,#tab2,#tab3,#tab4,#tab5').fadeOut(0);
		$('#tab3').fadeIn(0);
	});
	$('#tab4-btn').click(function() {
		$('#tab1,#tab2,#tab3,#tab4,#tab5').fadeOut(0);
		$('#tab4').fadeIn(0);
	});
	$('#tab5-btn').click(function() {
		$('#tab1,#tab2,#tab3,#tab4,#tab5').fadeOut(0);
		$('#tab5').fadeIn(0);
	});



});