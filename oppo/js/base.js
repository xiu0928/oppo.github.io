$(document).ready(function(){
	$(".products").mouseenter(function(){
		$(".opacity").css("display","block");
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
		$(".opacity").css("display","none");
		$(this).children('.navpopup').css("z-index","-2");
		$(this).children('.navpopup').find('a').css({
			"visibility":"hidden",
			"opacity":"0",
			"transform":"matrix(1, 0, 0, 1, 0, 18)"
		})
	})
	$(".nav-con").hover(function(){
		$(".products").children('.navpopup').stop(true).animate({
			height:"270px",
			opacity:"1"
		},300)
	},function(){
		$(".products").children('.navpopup').stop(true).animate({
			height:"0px",
			opacity:"0"
		},300)
	})
})
