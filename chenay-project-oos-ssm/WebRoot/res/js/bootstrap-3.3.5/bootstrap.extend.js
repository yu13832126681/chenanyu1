(function($){
	//类似alert功能的消息弹出框
	$.fn.popover_alert = function(opts){
		//定义插件需要的属性
		//弹出框的标题
		//弹出框的消息内容
		//弹出框的确定按钮 的点击事件函数
		var defaults={
			title:null,//弹窗框的标题
			content:null,//弹出框的内容
			confirm:function(){//弹出框确定按钮的点击函数
				
			}
		};
		var options = $.extend(defaults,opts);
		//触发弹出框的点击按钮,<a class="btn bt-default" data-toggle='popover'>
		//$.fn.popover_alert 这里的$.fn就是指$(选择器)之后拿到的jquery对象
		var $btn = this;
		
		//弹出框确定按钮的点击关闭弹出框的函数
		//为了避免点击的时候触发到2个按钮,这样可能使用相同的函数名
		//使用当前时间的毫秒数加上一个1000以内的随机数,作为函数名,
		//避免 [触发了2个按钮的弹出框里面] [‘确定'按钮的点击函数]冲突
		var fun_id = '_'+new Date().getTime()+'_'+Math.ceil(Math.random()*1000);
		/*
		 * 在html标签中使用onclick="函数名();"是调用一个js函数,这个函数是window的属性
		 * 比如:
		 * <script>
		 * 	function click_fun(){
		 *  }
		 * </script>
		 * <input type="button" value="提交" onclick="click_fun"/>
		 * 
		 * 在<script></script>中定义的函数click_fun 为成为window的一个属性
		 * 通过window.click_fun可以拿到这个函数, 也可以通过window['click_fun']拿到这个函数
		 * 所以调用这个函数可以使用以下三种方式
		 * 	click_fun();
		 *  window.click_fun();
		 *  window['click_fun']();
		 *  
		 *  这就像jQuery源代码中 
		 *  	window.jQuery=window.$=jQuery;
		 *  	在页面中引入jQuery的js之后,就可以直接在js代码中使用 $,
		 *  在页面中省略window,直接写变量$是浏览器支持的
		 *  
		 *  另一种定义变量的方式
		 *  	window.变量名 = 值 ; 
		 *  而我们一般直接写
		 *  	变量名= 值：
		 *  
		 *  而js中对象的属性,可以直接 使用  
		 *  	.属性名 
		 * 	也可以使用
		 * 		[属性名]
		 * 
		 *  另外2种定义window的函数的方式
		 *  	window.函数名 = function(){
		 *  	};
		 *  	window['函数名'] = function(){
		 *  	}
		 *  
		 *  我们经常使用的在页面中<script></script>标签中直接写函数的方式
		 *  	function 函数名(){
		 *  	}
		 *  	[var 函数名 = function(){};](同上一种)
		 *  	这2种方式只有在页面的<script></script>标签中直接写才能成为window的属性
		 *  	我们现在一个和页面分离的单独的js文件中,所以这2种方式不采用
		 *  
		 *  剩下的2种方式:
		 *  	window.函数名 = function(){
		 *  	};
		 *  	window['函数名'] = function(){
		 *  	}
		 *  因为(window.函数名)这里的函数名必须是一个确定的字符串,所以不能使用这种方式
		 *  所以使用(window['函数名'])这种方式定义
		 * 
		 *  1.在页面中<script></script>标签中直接定义的全局的变量名 或者函数 都是window的属性
		 *    window的属性,可以省略(window.)直接使用
		 *  2.在页面中函数内定义的变量, 
		 *  		如果使用var声明, 不是window的属性;
		 *  		如果不适用var声明,还是window的属性;
		 *  	比如:下面函数中定义的c是局部变量,d是全局变量,所以也是window的属性
		 *  	(function(){
		 *	  		alert(222);
		 *			var c = 333;
		 *	  		d = 444;
		 *		})();
		 *	
		 *		console.log(window.c);
		 *		console.log(window.d);
		 *		console.log(d);
		 *  3.定义window的属性, 
		 *  	属性可以是具体的值,也可以是一个函数, 
		 *  	可以使用
		 *  		window.属性名
		 *  		window['属性名']
		 *  4.在页面onclick=""中使用的函数,必须是window的属性
		 *  	onclick="fun();" fun必须是window的属性,只不过这个属性 是一个函数
		 *  	conclick="document.write(123);" 这里的document也是window的属性
		 *  
		 */
		window['btn_ok_fun'+fun_id]=function(){
			$btn.popover('destroy');
			options.confirm();
			delete window['btn_ok_fun'+fun_id];
		};
		
		var html_btn_ok='<a class="btn btn-success btn-xs" onclick="btn_ok_fun'+fun_id+'();return false;">确定</a>';
		var html_data_content='<div style="margin:10px">'+options.content+'</div><div class="text-center">'+html_btn_ok+'</div>';
		$btn.attr('title', options.title);
		$btn.attr('data-content', html_data_content);
		$btn.popover({html : true,animation:false});
		$btn.popover('show');
	};
	
	$.fn.popover_confirm = function(opts){
		//定义插件需要的属性
		//弹出框的标题
		//弹出框的消息内容
		//弹出框的确定按钮 的点击事件函数
		var defaults={
			title:null,//弹窗框的标题
			content:null,//弹出框的内容
			confirm:function(){//弹出框确定按钮的点击函数
				
			},
			cancel:function(){//弹出框取消按钮的点击函数
				
			}
		};
		var options = $.extend(defaults,opts);
		var $btn = this;//触发弹出框的点击按钮
		
		//弹出框确定按钮的点击关闭弹出框的函数
		var fun_id = '_'+new Date().getTime()+'_'+Math.ceil(Math.random()*1000);
		window['btn_ok_fun'+fun_id]=function(){
			$btn.popover('destroy');
			options.confirm();
			delete window['btn_ok_fun'+fun_id];
		};
		window['btn_cancel_fun'+fun_id]=function(){
			$btn.popover('destroy');
			options.cancel();
			delete window['btn_ok_fun'+fun_id];
		};
		var html_btn_ok='<a  class="btn btn-success btn-xs" onclick="btn_ok_fun'+fun_id+'();">确定</a>';
		var html_btn_cancel='<a class="btn btn-info btn-xs" style="margin-left:5px" onclick="btn_cancel_fun'+fun_id+'();">取消</a>';
		var html_data_content='<div style="margin:10px">'+options.content+'</div><div class="text-center">'+html_btn_ok+html_btn_cancel+'</div>';
		$btn.attr('title', options.title);
		$btn.attr('data-content', html_data_content);
		$btn.popover({html : true,animation:false});
		$btn.popover('show');
	};
	
})(jQuery);