// main.js
$(function(){
	
	// 모바일 토글 메뉴
	// #toggle click하면 nav가 toggle됨(toggleClass)
	$("#toggle").click(function(){
		$("header nav").toggleClass("on");
	});

}); //$