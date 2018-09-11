$(document).ready(function(){
	let a1 = document.getElementById('A1');
	let a2 = document.getElementById('A2');
	
	let a4 = document.getElementById('A4');
	a1.addEventListener("focusout",function(){
		if (a1.value === "") {
			$(this).parent().addClass("alert");
			$(this).addClass("alert");
			$(this).next().html("此欄位必填，請輸入內容");
		} else {
			$(this).parent().removeClass("alert");
			$(this).removeClass("alert");
			$(this).next().html("");
		}
	});
	a2.addEventListener("focusout",function(){
		if (a2.value === "") {
			$(this).parent().addClass("alert");
			$(this).addClass("alert");
			$(this).next().html("此欄位必填，請輸入內容");
		} else {
			$(this).parent().removeClass("alert");
			$(this).removeClass("alert");
			$(this).next().html("");
		}
	});
	
	a4.addEventListener("focusout",function(){
		if (a4.value === "") {
			$(this).parent().addClass("alert");
			$(this).addClass("alert");
			$(this).next().html("此欄位必填，請輸入內容");
		} else {
			$(this).parent().removeClass("alert");
			$(this).removeClass("alert");
			$(this).next().html("");
		}
	});

});