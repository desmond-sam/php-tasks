$(function(){
	
	$("input[name='choice']").change(function(){

		if(		$("#d1").css("display") == "none"	){
			$("#d1").css("display", "inline-block");
			$("#d2").css("display", "none");
		}

		else{
			$("#d1").css("display", "none");
			$("#d2").css("display", "inline-block");	
		}
	});

	
	});