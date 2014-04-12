$(function(){
	$(".animal").hover(function(){
		$(this).css("background-position", "-100px 0");
	},function(){
		$(this).css("background-position", "0px 0px");
	}).click(function(){
		$("html, body").animate({scrollTop:0},0);
		$(this).animate({
			"right": "-100px"
		},200);
		$(".fold").addClass("fold_on");
		setTimeout(function(){
			$(".mask").fadeIn(200);
			pfold.unfold();
		}, 1200);
	});

	var pfold = $('#uc-container').pfold({
			easing : 'ease-in-out',
			speed : 600,
			folds : 3,
			overlays : true,
			folddirection : ['left','bottom','right'],
			onEndUnfolding : function(){
				setTimeout(function(){
					$(".spokey").addClass("social_on"); 
				}, 300);
			}
		});

	$( '#uc-container' ).find('span.close').on('click', function() {
		$(".mask").hide();
		pfold.fold();
		setTimeout(function(){
			$(".fold").removeClass("fold_on");
		}, 2000);
		setTimeout(function(){
			$(".fold").removeClass("fold_on");
			$(".animal").animate({
				"right": "0px"
			},200);
		}, 3000);
		
	});

})