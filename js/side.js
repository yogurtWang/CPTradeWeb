window.onscroll = function() {
	var turnColor = document.getElementsByTagName("header")[0];
	var h =  $("header").outerHeight(true); 
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t >= h) {
		turnColor.style.boxShadow = "none";
		turnColor.style.position = "fixed";
		turnColor.style.top = "0"
		turnColor.style.borderBottom = "1px solid #dee7f7"
		} else {
		turnColor.style.boxShadow = "0px 2px 1px 2px #eae8e9";
		turnColor.style.position = "relative"
		turnColor.style.borderBottom = "none"
	}
}
$(document).ready(function() {
	$(".rightIcon").click(function() {
		$(".sideBar").animate({
			right: '0px'
		}, "slow");
		$(".sideBar").focus();
		$("#sideBarBg").focus();
		$("#sideBarBg").removeClass("hide").addClass("show");
		$("body").css("height","100%").css("overflow","hidden");
       	$("html").css("height","100%").css("overflow","hidden");
	})
	$(".backBox").click(function() {
		$(".sideBar").animate({
			right: '-65%'
		}, "slow");
		$("#sideBarBg").removeClass("show").addClass("hide");
		$(".sideToolBox").animate({
			bottom: '-75%'
		}, "slow");
		$("body").css("height","auto").css("overflow","auto");
       	$("html").css("height","auto%").css("overflow","auto");
	})
	$("#sideBarBg").click(function() {
		$(".sideBar").animate({
			right: '-65%'
		}, "slow");
		$("#sideBarBg").removeClass("show").addClass("hide");
		$(".sideToolBox").animate({
			bottom: '-75%'
		}, "slow");
		$("body").css("height","auto").css("overflow","auto");
       	$("html").css("height","auto%").css("overflow","auto");
	})
})
$(".moreTool").click(function() {
	$(".sideToolBox").animate({
		bottom: '0px'
	}, "slow");
})
$(".slideDown").click(function() {
	$(".sideToolBox").animate({
		bottom: '-75%'
	}, "slow");
})