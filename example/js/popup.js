document.body.style.backgroundColor = "gray";
 
	
	var $input = $('<input type="button" value="new button" id="b" />');
     $input.prependTo($("body"));
	 
	 $("#b").click(function(){ func() });
	 $("#b").after("<div id=\"message\" ></div>"); 
	 
function func()
{
	
	console.log("Works."); 
	
	var write = document.getElementById("message"); 
	
	 
	write.innerHTML = ""; 
	write.innerHTML +="<b>It works.!</b>";
	
 
	
}