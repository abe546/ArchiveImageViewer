document.body.style.backgroundColor = "gray";
 
	
	var $input = $('<input type="button" value="Open" id="b" />');
     $input.prependTo($("body"));
	 
	 $("#b").click(function(){ func() });
	 $("#b").after("<div id=\"message\" ></div>"); 
	 $("#message").after("<div id=\"imageView\" ></div>"); 
	 
function func()
{
	var view = document.getElementById("pc736680961"); 
	window.location.hash = '#pc736680961';
	
	if(localStorage.getItem("in")=="null" || localStorage.getItem("in") == null )
	{
		localStorage.setItem("in",1); 
	}
	else if(localStorage.getItem("in") == 1)
	{
		localStorage.setItem("in",0); 
		
		view.innerHTML=""; 
		$("#b").prop("value","open"); 
		return;
	}
	else if(localStorage.getItem("in") == 0)
	{
		localStorage.setItem("in",1); 
	}

	
	console.log("In func."); 
	
	$("#b").prop("value","close"); 
	
	var write = document.getElementById("message"); 
	
	 
	write.innerHTML = ""; 
	write.innerHTML +="<b>It works.!</b>";
	/*Magic of the DOM*/
	
	var thread = document.getElementsByClassName("thread"); 
	
 
 
		console.log("\n childNodes : "+thread[0].childNodes); 
		console.log("\n Length of childNodes : "+thread[0].childNodes.length); 
		
		for(i=0; i<thread[0].childNodes.length;i++)
		{
			console.log("\n "+i+" : "+ thread[0].childNodes[i]);
			console.log("\n Type : "+ thread[0].childNodes[i].type);
		}
	 
	
	
	/**/
	
	
	view.innerHTML=""; 
	view.innerHTML+="<center><img id=\"theImage\" src=\"http://i.4cdn.org/b/1498198439341.png\" ></center>";
	
 
	
}

$(document).keydown(function(e){
	
 console.log(e.keyCode); 
 
});









