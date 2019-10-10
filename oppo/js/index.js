$(document).ready(function(){
	(function($) {
		'use strict';
		window.scrollReveal = new scrollReveal({ reset: true, move: '50px',easing:'ease-in-out' });
	})();
	$(".products").mouseenter(function(){
		$(this).children('.navpopup').css("z-index","-1");
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
		$(this).children('.navpopup').css("z-index","-2");
		$(this).children('.navpopup').find('a').css({
			"visibility":"hidden",
			"opacity":"0",
			"transform":"matrix(1, 0, 0, 1, 0, 18)"
		})
	})
	$(".nav-con").hover(function(){
		$('.header-con').find("a").addClass('active');
		$('.header-con').find('i').addClass('active');
		$(".products").children('.navpopup').stop().animate({
			height:"270px",
			opacity:"1"
		},300)
	},function(){
		$('.header-con').find("a").removeClass('active');
		$('.header-con').find('i').removeClass('active');
		$(".products").children('.navpopup').stop().animate({
			height:"0px",
			opacity:"0"
		},300)
	})
	$(".btn-k3").on('click',function(){
		$(window).attr('location',"productsK3.html");
	})
});