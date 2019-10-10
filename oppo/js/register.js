$(document).ready(function(){
	$(".button").on('click',function(){
		var is = checkPhone($(".phone").val(),$(".passwd").val());
		var is1 = checkPassWord($(".passwd").val(),$(".passwd1").val())
		var is2 = checkIs($(".is").val());
		if(is&&is1&&is2){
			CommentAll($(".phone").val(),$(".passwd").val());
		}
	})
	var i=0;
	$(".showpassword:eq(0)").on('click',function(){
		for(;i<2;){
			if(i==0){
				$(".passwd").attr("type","text");
				i++;
				break;
			};
			if(i==1){
				$(".passwd").attr("type","password");
				i=0;
				break;
			}
		}
	})
	var j=0;
	$(".showpassword:eq(1)").on('click',function(){
		for(;j<2;){
			if(j==0){
				$(".passwd1").attr("type","text");
				j++;
				break;
			};
			if(j==1){
				$(".passwd1").attr("type","password");
				j=0;
				break;
			}
		}
	})
	//判断手机号
	function checkPhone(phone) {
		if(!(/^1[34578]\d{9}$/.test(phone))) {
			$(".zoneinput").append("<p class='error-p'>手机号格式错误！</p>");
		} else {
			return true;
		}
	}
	//判断密码
	function checkPassWord(passwd,passwd1){
		if(passwd==""||passwd==null){
			$(".pass2").append("<p class='error-p'>请输入密码！</p>");
		}else if(passwd!=passwd1){
			$(".pass2").append("<p class='error-p'>两次输入的密码不相同！</p>");
		}else{
			return true;
		}
	}
	//判断验证码
	function checkIs(is){
		if(is==""||is==null){
			$(".codewrap").append("<p class='error-p'>验证码为空！</p>");
		}else{
			return true;
		}
	}
	$(".phone").on('click',function(){
		$("p").remove(".error-p");
	})
	$(".password").on('click',function(){
		$("p").remove(".error-p");
	})
	$(".is").on('click',function(){
		$("p").remove(".error-p");
	})
	$(".input-code").on('click',function(){
		var randnum=rand(1000,9999);
		$(".is").val(randnum);
	})
	//随机数
    function rand(min,max) {
        return Math.floor(Math.random()*(max-min))+min;
    }
	//服务器请求
	//第一步，创建XMLHttpRequest对象
	var xmlHttp = new XMLHttpRequest();
	function CommentAll(phone,passwd){
	    //第二步，注册回调函数
		xmlHttp.onreadystatechange = callback1;
	    //第三步，配置请求信息，open(),get
	    xmlHttp.open("get", "https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone="+phone+"&passwd="+passwd, true);
	    //第四步，发送请求,get请求下，要传递的参数放这
	    xmlHttp.send();
	}
	//第五步，创建回调函数
	function callback1() {
		if (xmlHttp.readyState == 4){
	    	if (xmlHttp.status == 200) {
	        	var text = xmlHttp.responseText;
	        	var resultJson = eval("("+text+")");//把响应内容对象转成javascript对象
	            var msg = resultJson.msg;//获取json中的msg键对应的值
	            if(msg=="成功!"){
	            	$(window).attr('location',"login.html");
	            	
	            }else if(msg=="用户已注册！"){
	            	$(".agreements").prepend("<p class='error-p'>用户已注册！</p>")
	            }
	        }
	    }
	}
})
