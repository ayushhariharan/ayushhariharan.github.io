//=====================================//
//======== Font license info  =========//
//=====================================//
/*    
## Entypo
   Copyright (C) 2012 by Daniel Bruce
   Author:    Daniel Buce
   License:   SIL (http://scripts.sil.org/OFL)
   Homepage:  http://www.entypo.com

## Font Awesome
   Copyright (C) 2012 by Dave Gandy
   Author:    Dave Gandy
   License:   CC BY 3.0 (http://creativecommons.org/licenses/by/3.0/)
   Homepage:  https://fortawesome.github.com/Font-Awesome/

## Web Symbols
   Copyright (c) 2011 by Just Be Nice studio. All rights reserved.
   Author:    Just Be Nice studio
   License: 	  SIL (http://scripts.sil.org/OFL)
   Homepage:  http://www.justbenicestudio.com/studio/websymbols/
*/
//=====================================//

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

$('div#dropdown').on('click', function(){
	var $map_type=$(this).attr('data-filter')

	if($('div#dropdown> div').hasClass('down')) {
		if ($map_type=='*') {
			$('div#timeline_container >ul> li').removeClass('active');
			$('div#timeline_container >ul> li').removeClass('hidden');
			$($('div#timeline_container >ul> li')[0]).addClass('active');
		} else {
			$(this).addClass('active');
			$('div#timeline_container >ul> li').addClass('hidden');	
			$('div#timeline_container >ul> li.'+$map_type+'_event').removeClass('hidden');
			$('div#timeline_container >ul> li').removeClass('active');
			$($('div#timeline_container >ul> li.'+$map_type+'_event')[0]).addClass('active');
		}
		$('div#dropdown> div').removeClass('down')
		$('div#dropdown> div').addClass('up')
	} else {
		if ($map_type=='*') {
			$('div#timeline_container >ul> li').removeClass('active');
			$('div#timeline_container >ul> li').addClass('hidden');

			$($('div#timeline_container >ul> li')[0]).removeClass('hidden');
			$($('div#timeline_container >ul> li')[1]).removeClass('hidden');
			$($('div#timeline_container >ul> li')[0]).addClass('active');
			$('div#dropdown').attr('data-filter', '*')
	
		} else {
			$('div#timeline_container >ul> li').addClass('hidden');	
			$($('div#timeline_container >ul> li.'+$map_type+'_event')[0]).removeClass('hidden');
			$($('div#timeline_container >ul> li.'+$map_type+'_event')[1]).removeClass('hidden');
			$('div#timeline_container >ul> li').removeClass('active');
			$($('div#timeline_container >ul> li.'+$map_type+'_event')[0]).addClass('active');
			$('div#dropdown').attr('data-filter', $map_type)
		}
		$('div#dropdown> div').removeClass('up')
		$('div#dropdown> div').addClass('down')
	}
});


$('#portfolio-flters li').on('click', function(){
	var $type=$(this).attr('data-filter');
	if ($type=='*') {
		$('div#timeline_container >ul> li').removeClass('active');
		$('div#timeline_container >ul> li').addClass('hidden');

		$($('div#timeline_container >ul> li')[0]).removeClass('hidden');
		$($('div#timeline_container >ul> li')[1]).removeClass('hidden');
		$($('div#timeline_container >ul> li')[0]).addClass('active');
		$('div#dropdown').attr('data-filter', '*')

	} else {
		$('div#timeline_container >ul> li').addClass('hidden');	
		$($('div#timeline_container >ul> li.'+$type+'_event')[0]).removeClass('hidden');
		$($('div#timeline_container >ul> li.'+$type+'_event')[1]).removeClass('hidden');
		$('div#timeline_container >ul> li').removeClass('active');
		$($('div#timeline_container >ul> li.'+$type+'_event')[0]).addClass('active');
		$('div#dropdown').attr('data-filter', $type)
	}

	$('div#dropdown> div').removeClass('up')
	$('div#dropdown> div').addClass('down')
			
});


$(document).on('scroll',function(){
	$('div#instructions_container').fadeOut('fast');
	$('div#info_container').fadeIn('fast');
});
$(document).on('click','div#info_container',function(){
	$('div#instructions_container').fadeIn('fast');
	$('div#info_container').fadeOut('fast');
});


$(document).on('keypress',function(e){
	if(e.which==106) {
		scrollToNext();
	} else if(e.which==107) {
		scrollToPrev();
	}
});

$('div#timeline_container').on('click','li', function(){
	showNext($(this));
});

function showNext(li){
	var $itms=$('div#timeline_container li');
	$itms.removeClass('active');
	$(li).addClass('active');
	$('html,body').stop().animate({ scrollTop: $(li).offset().top-$(li).height()}, 500,function(){
		$('html,body').stop();
	});
}

function scrollToNext() {
	var $itms=$('div#timeline_container > ul > li');
	var $current=$itms.index($('div#timeline_container li.active'));
	
	if ($($itms[$current+1]).length>0 && !$($itms[$current+1]).hasClass('hidden')) {
		$itms.removeClass('active');
		$($itms[$current+1]).addClass('active');
		$('html,body').stop().animate({ scrollTop: $($itms[$current+1]).offset().top-$($itms[$current+1]).height()}, 500);
	} else {
		$('html,body').stop().animate({ scrollTop: $(document).height()}, 500);
	}
}
function scrollToPrev() {
	var $itms=$('div#timeline_container > ul > li');
	var $current=$itms.index($('div#timeline_container li.active'));
	
	if ($($itms[$current-1]).length>0 && !$($itms[$current-1]).hasClass('hidden')) {
		$itms.removeClass('active');
		$($itms[$current-1]).addClass('active');
		$('html,body').stop().animate({ scrollTop: $($itms[$current-1]).offset().top-$($itms[$current-1]).height()}, 500);
	} else {
		$('html,body').stop().animate({ scrollTop: 0}, 500);
	}
}

