document.body.style.backgroundColor = "gray";
 
	
	var $input = $('<input type="button" value="new button" id="b" />');
     $input.prependTo($("body"));
	 
	 $("#b").click(function(){ func() });
	 
function func()
{
	
	console.log("Works."); 
	
	
	
}