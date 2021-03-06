$(document).ready(function(){
	
	$('#contact').click(function() {
		$('#modal-container').fadeIn();
        $('nav').addClass('hide-nav');
	});

    $('#close').click(function() {
		$('#modal-container').fadeOut();
        $('nav').removeClass('hide-nav');
	});
	
	$('#modal-overlay').click(function () {
		$('#modal-container').fadeOut();
        $('nav').removeClass('hide-nav');
	});
    
    $('#home').click(function() {
        $('html, body').animate({
            scrollTop: $('.nav-container').offset().top
        }, 800);    
    });
    
    $('#about').click(function() {
        $('html, body').animate({
            scrollTop: $('#about-us').offset().top
        }, 800);
    });
    
    $('#faq-link').click(function() {
        $('html, body').animate({
            scrollTop: $('#faq').offset().top
        }, 800);
    });
});

// The 6 functions I used:
// click(), fadeIn(), fadeOut(), addClass(), removeClass(), scrollTop()