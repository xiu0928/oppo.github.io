$(document).ready(function(){

	(function($) {
		'use strict';
		window.scrollReveal = new scrollReveal({ reset: true, move: '50px',easing:'ease-in-out' });
	})();
	$(".pic-list").children("li").on('click',function(){
		console.log($(this).index())
		$(this).addClass("current").siblings().removeClass("current");
		switch($(this).index()){
			case 0:
				$(".gallery-stage").children("ul").css("transform","matrix(1, 0, 0, 1, 0, 0)")
				break;
			case 1:
				$(".gallery-stage").children("ul").css("transform","matrix(1, 0, 0, 1, -560, 0)")
				break;
			case 2:
				$(".gallery-stage").children("ul").css("transform","matrix(1, 0, 0, 1, -1120, 0)")
				break;
			case 3:
				$(".gallery-stage").children("ul").css("transform","matrix(1, 0, 0, 1, -1680, 0)")
				break;
		}
	})
	$(".oc-radio").on('click',function(){
		$(this).addClass("oc-current").siblings().removeClass("oc-current");
	})
	$(".oc-radios").on('click',function(){
		$(this).addClass("oc-current").siblings().removeClass("oc-current");
	})
	var num=0;
	$(".sub").on('click',function(){
		num--;
		if(num<1){
			num=1;
		}
		$("#num").attr("value",num);
	})
	$(".plus").on('click',function(){
		num++;
		$("#num").attr("value",num);
	})
})
