debugger
$("#result").hide();
$("button").click(function(){
	if($("#fname").val()=="" || $("#sname").val()== "" || $("#email").val()=="" || 
		$("#adress").val()== "")
	{
		window.alert("Name must be filled out");
	}else{
		debugger
		$("#validateForm").hide();
		$("#result").show();
		var firstname1=$("#fname").val();
		$("#firstname").text(firstname1);
		var lastname=$("#sname").val();
		$("#lastname").text(lastname);
		var email=$("#email").val();
		$("#mail").text(email);
		var adress=$("#adress").val();
		$("#adr").text(adress);
	}
});