$(document).ready(function(){
	let a1 = document.getElementById('A1');
	let a2 = document.getElementById('A2');
	let a4 = document.getElementById('A4');
	let a5 = document.getElementById('A5');
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
	$("div#sb").bind('click',function(){
		if($("input#pro")[0].checked || $("input#amateur")[0].checked) {
			if ($("input#pro")[0].checked && $("input#amateur")[0].checked) {
				$("#Q3").next().next().next().next().html("不可以兩者都選，請取消其中一個。");
				$("#Q3").parent().addClass('alert');
			} else {
				$("#Q3").next().next().next().next().html("");
				$("#Q3").parent().removeClass('alert');
				if ($("input#pro")[0].checked) {
					console.log(a1.value,'\n',a2.value,'\n','工程師培養班','\n',a4.value,'\n',a5.value);
				} else {
					console.log(a1.value,'\n',a2.value,'\n','業餘班','\n',a4.value,'\n',a5.value);
				}
				alert("表單內容已經顯示在console中了!");
			}
		} else {
			$("#Q3").next().next().next().next().html("此欄位必選，請選擇其中一項");
			$("#Q3").parent().addClass('alert');

		}
	});
});