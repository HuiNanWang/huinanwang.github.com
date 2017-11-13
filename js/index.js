$(document).ready(function(){
	var i=0,index,timer=null;
/**banner广告轮播(颜色)**/




/*****遍历楼层左侧滚动菜单*********/
//1.获取楼层的文字添加到DOM树上，2.拼字符串添加到DOM树上
//3.
$(function () {
	
	//遍历导航楼层111
	var atrf = [];
	var len = $(".floor .m").length;//当前楼层的个数
	for (var mm = 0; mm < len; mm++) {
		var str = $(".floor .m .title").eq(mm).text();//获取楼层的标题
		atrf.push(str);//将标题添加到页面中
	}
	var lis = "";
	$(atrf).each(function (i, n) {//遍历楼层，拼字符串
		lis += '<li class="J_lift_item lift_item lift_item_first"><a class="lift_btn"><span class="lift_btn_txt">' + n + '</span></a></li>';
	});
	$(".lift_list").prepend(lis);//将其添加到页面中

	//当用户在元素内执行了滚动操作，就会在这个元素上触发scroll事件。它适用于window对象，但也可以是可滚动frames与CSS overflow属性设置为scroll的元素（或auto时，元素的显示高度小于其内容高度）。 
	$(window).scroll(function () {
			//滚动轴
			var CTop = document.documentElement.scrollTop | document.body.scrollTop;
			//console.log("CTop:"+CTop);
			var floorone=$(".floor .m").eq(0).offset().top;
			//console.log("floorone:"+floorone);
			//当滚动轴到达楼层一时，左菜单栏显示
			if (CTop >= floorone) {
				$("#lift").show(500);
			} else {
				$("#lift").hide(500);
			}
		})
		//.publicss  块
		//.J_lift_item 左导航

	var b;
	$(".lift_list .J_lift_item").click(function () {//为li绑定单击事件
			b = $(this).index();//获取li的下标
			$(".J_lift_item").removeClass("reds");//移出其他li的reds
			$(this).addClass("reds");//为当前元素添加reds
			//离顶部距离
			var offsettop = $(".floor .m").eq(b).offset().top;
			//滚动轴距离
			var scrolltop = document.body.scrollTop | document.documentElement.scrollTop;
			//scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
			scrolltop(
				$("html,body").stop().animate({
					scrollTop: offsettop
				}, 1000));
		})
		//返回顶部
	$(".lift_item_top").click(function () {
		$('html,body').animate({
			scrollTop: '0px'
		}, 800);
	});
	//滚动楼层对应切换左侧楼层导航
	var le = $(".floor .m").length;
	var arr = [];
	for (var s = 0; s < le; s++) {
		var nums = $(".floor .m").eq(s).offset().top;
		//console.log("nums:"+nums);
		arr.push(nums);
	}
	$(window).scroll(function () {
		var scrTop = $(window).scrollTop();
		//console.log("scrTop:"+scrTop);
		for (var w = 0; w < arr.length; w++) {
			var cc = arr[w + 1] || 1111111111;
			if (scrTop >= arr[w] && scrTop <= cc) {
				if (arr[w + 1] < 0) {
					w = w + 1;

				}
				$(".J_lift_item").removeClass("reds");
				$(".J_lift_item").eq(w).addClass("reds");
			}
		}
	});
})







})

