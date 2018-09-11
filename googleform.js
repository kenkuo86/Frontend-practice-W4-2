$(document).ready(function(){
	let a1 = document.getElementById('A1');
	if (a1.onfocus) {
		if (a1.innerHTML === ""){
			alert("此欄位必填!")
		}
	}
	

});