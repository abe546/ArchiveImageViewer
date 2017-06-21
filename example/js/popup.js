 
/*chrome.browserAction.onClicked.addListener(

function(tab) { 
//alert("clicked"); 

var write = document.getElementById("status"); 

write.innerHTML=""; 
write.innherHTML +="<br> Status is unknown.</br>";
window.location.replace("popup.html"); 
}
);
window.onload=function start() 
{ 



var write = document.getElementById("status"); 

write.innerHTML=""; 
write.innherHTML +="<br> Status is unknown.</br>";

} )

 */
 
 document.body.style.backgroundColor = "gray";
 var button = document.createElement("input");
    button.type = "button";
    button.value = "im a button";
    button.onclick = func;
    document.body.appendChild(button);
	
	var $input = $('<input type="button" value="new button" />');
    $input.appendTo($("body"));
	
	function func()
	{
		console.log("It works."); 
	}