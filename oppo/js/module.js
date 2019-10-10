//主要的
$(document).ready(function(){
	
	(function($) {
		'use strict';
		window.scrollReveal = new scrollReveal({ reset: false, move: '50px',easing:'ease-in-out' });
      })();
	
	$(".products").mouseenter(function(){
		$(this).children('.navpopup').css("z-index","-1");
//		$(this).children('a').addClass('active');
		$(this).children('.navpopup').find('a').css({
			"visibility":"inherit",
			"opacity":"1",
			"transform":"matrix(1, 0, 0, 1, 0, 0)"
		})
	})
	$(".isadmin").on('click',function(){
		if(window.sessionStorage.getItem('admin')!="成功!"){
			$(window).attr('location',"login.html");
		}else{
			$(window).attr('location',"opposhop.html");
		}
	})
	$(".products").mouseleave(function(){
//		$(this).children('a').css("color","#000");
		$(this).children('.navpopup').css("z-index","-2");
		$(this).children('.navpopup').find('a').css({
			"visibility":"hidden",
			"opacity":"0",
			"transform":"matrix(1, 0, 0, 1, 0, 18)"
		})
	})
	$(".nav-con").hover(function(){
		$(".products").children('.navpopup').stop().animate({
			height:"270px",
			opacity:"1"
		},300)
	},function(){
		$(".products").children('.navpopup').stop().animate({
			height:"0px",
			opacity:"0"
		},300)
	})
	$(".videobtn").on('click',function(){
		$(".vide").css("z-index","3");
//		$(".videomp4").attr("src","video/sec3-cb85a8056c05ddb290f3352b593c946b.mp4");
	})
	$(document).scroll(function(){
		console.log($(document).scrollTop());
		var i=$(document).scrollTop();
		switch (i){
			case 0:
				$(".oppo-r17").css("opacity","1");
				break;
			case 66:
				$(".oppo-r17").css("opacity","0.9");
				break;
			case 132:
				$(".oppo-r17").css("opacity","0.8");
				break;
			case 198:
				$(".oppo-r17").css("opacity","0.7");
				break;
			case 264:
				$(".oppo-r17").css("opacity","0.6");
			break;
			case 328:
				$(".oppo-r17").css("opacity","0.5");
				break;
			case 396:
				$(".oppo-r17").css("opacity","0.4");
			break;
			case 462:
				$(".oppo-r17").css("opacity","0.3");
				break;
			case 528:
				$(".oppo-r17").css("opacity","0.2");
			break;
			case 594:
				$(".oppo-r17").css("opacity","0.1");
				break;
			case 660:
				$(".oppo-r17").css("opacity","0.0");
			break;
		}
	})
});