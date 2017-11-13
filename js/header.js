$(document).ready(function(){
	var i=0,index,timer=null;
	
	/**导航栏移入显示下拉菜单*/
 	$(".head_right dl").hover(function(){
 		$(this).addClass("navactive");
 		$(this).find("dd").show();
        $(this).prev().find("p").css("right","-2px");
 	},function(){
 		$(".head_right dl").removeClass("navactive");
 		$(".head_right dd").hide();
        $(this).prev().find("p").css("right","-1px");
 	})

		/*左侧菜单栏鼠标移入效果*/
		$(".classic").on("mouseover",function(){
			var $title=$(this).children();
			//console.log($title);
			$title.next().css("display","block");
		})
		$(".classic").on("mouseout",function(){
			var $title=$(this).children();
			//console.log($title);
			$title.next().css("display","none");
		})
	  $(".tleft ul li").hover(function(){
        $(this).addClass("hover_leave");
        $(this).find("h3 a").css("color","red");
        $(this).find(".hover_content").show();
    },function(){
        $(this).removeClass("hover_leave");
        $(this).find("h3 a").css("color","#fff");
        $(this).find(".hover_content").hide();
    })
		/***按  店铺   或者   宝贝  类型搜索**/
	$(".search_types li").click(function(){
		$(".search_types li").removeClass("active");
		$(this).addClass("active");
		var type=$(this).find("a").attr("data-param");
		if(type=="shop"){
			$("#search_ctl").val("Shop_Index");
			$("#search_met").val("index");
		}else{
			$("#search_ctl").val("Good_Goods");
			$("#search_met").val("goodlist");
		}
	})
	/*搜索常用关键字绑定鼠标移入变红*/
	$(".nav a").hover(function(e){
		e.preventDefault();
		$(this).css("color","red")
	},function(e){
			e.preventDefault();
		$(this).css("color","#000");	
	})
	/**红色下拉菜单固定关键字鼠标移入变红**/
	$(".tnav a").hover(function(e){
		e.preventDefault();
		$(this).css("color","red")
	},function(e){
			e.preventDefault();
		$(this).css("color","#000");	
	})
}) 