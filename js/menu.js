jQuery(document).ready(function($){
	
	var MQL = 1170;

	
	if($(window).width() > MQL) {
		var headerHeight = $('.box-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    
		    if (currentTop < this.previousTop ) {
		   
		    	if (currentTop > 0 && $('.box-header').hasClass('is-fixed')) {
		    		$('.box-header').addClass('is-visible');
		    	} else {
		    		$('.box-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    
		    	$('.box-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.box-header').hasClass('is-fixed')) $('.box-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}


	$('.box-primary-nav-trigger').on('click', function(){
		$('.box-menu-icon').toggleClass('is-clicked'); 
		$('.box-header').toggleClass('menu-is-open');
		
		
		if( $('.box-primary-nav').hasClass('is-visible') ) {
			$('.box-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.box-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});